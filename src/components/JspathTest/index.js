import React from 'react';
import jspath from 'jspath';

const json = {
    "automobiles": [
        { "maker": "Nissan", "model": "Teana", "year": 2011 },
        { "maker": "Honda", "model": "Jazz", "year": 2010 },
        { "maker": "Honda", "model": "Civic", "year": 2007 },
        { "maker": "Toyota", "model": "Yaris", "year": 2008 },
        { "maker": "Honda", "model": "Accord", "year": 2011 }
    ],
    "motorcycles" : [
        { "maker" : "Honda", "model" : "ST1300", "year" : 2012 }
    ]
};
/*
const rules = [
    jsont.pathRule(
        '.automobiles{.maker === "Honda"}', d => ({
            Honda: d.runner()
        })
    ),
    jsont.pathRule(
        '.{.maker}', d => ({
            model: d.match.model,
            year: d.match.year
        })
    ),
    jsont.identity
];
*/
class JspathTest extends React.Component {

    state = {
    }

    constructor(props) {
        super(props);
    }


    render() {
        const transformed = jspath.apply('.*{.maker === "Honda" && .year > 2009}.model',json);

        return (
            <div>
                <h1>JspathTest</h1>
                {JSON.stringify(transformed)}
            </div>
        );
    }
}

export default JspathTest;