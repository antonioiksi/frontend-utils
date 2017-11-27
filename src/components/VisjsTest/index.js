import React from 'react';
import * as vis  from 'vis';
import 'vis/dist/vis.css';


var data = [
    {id: 1, content: 'item 1', start: '2013-04-20'},
    {id: 2, content: 'item 2', start: '2013-04-14'},
    {id: 3, content: 'item 3', start: '2013-04-18'},
    {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
    {id: 5, content: 'item 5', start: '2013-04-25'},
    {id: 6, content: 'item 6', start: '2013-04-27'}
];
var options = {};

class VisjsTest extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick() {
        var container = document.getElementById('visualization');

        var timeline = new vis.Timeline(container, data, options);
    }

    render() {
        return (
            <div>
                <h1>VisjsTest</h1>
                <div id="visualization"/>
                <button onClick={this.handleClick}>VisjsTest</button>
            </div>
        );
    }
}

export default VisjsTest