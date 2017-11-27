import React from 'react';
import {jsont, pathRule} from 'json-transforms';
import jspath from 'jspath';

const values =
        [
            {
                "name": "speaker",
                "value": "king"
            },
            {
                "name": "play_name",
                "value": "Henry",
            }
        ];

const queryMain =
    {
        "query": {
            "bool": {
                "should": [
                    {
                        "query_string": {
                            "default_field": "*play_name*",
                            "query": "Henry"
                        }
                    }
                ]
            }
        }
    }

const queryValue ={
        "query_string": {
            "default_field": "*speaker*",
            "query": "king"
        }
    }
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
class JsonTransformsTest extends React.Component {

    state = {
    }

    constructor(props) {
        super(props);
    }


    render() {


        const transformed = jspath.apply('.[1].name',values,);
        //const transformed  = jsont.transform(json, rules);

        return (
            <div>
                <h1>JsonTransformsTest</h1>
                {JSON.stringify(transformed)}
            </div>
        );
    }
}

export default JsonTransformsTest;