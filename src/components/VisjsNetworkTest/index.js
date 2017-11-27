import React from 'react';
import * as vis  from 'vis';
import 'vis/dist/vis-network.min.css';
import './style.css';

// create an array with nodes
var nodes = [
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3:\nLeft-Aligned', font: {'face': 'Monospace', align: 'left'}},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5\nLeft-Aligned box', shape: 'box',
        font: {'face': 'Monospace', align: 'left'}}
];

// create an array with edges
var edges = [
    {from: 1, to: 2, label: 'middle',     font: {align: 'middle'}},
    {from: 1, to: 3, label: 'top',        font: {align: 'top'}},
    {from: 2, to: 4, label: 'horizontal', font: {align: 'horizontal'}},
    {from: 2, to: 5, label: 'bottom',     font: {align: 'bottom'}}
];

class VisjsNetworkTest extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick() {
        // create a network
        var container = document.getElementById('mynetwork');
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {physics:false};
        var network = new vis.Network(container, data, options);

    }

    render() {
        return (
            <div>
                <h1>VisjsNetworkTest</h1>
                <div id="mynetwork"/>
                <button onClick={this.handleClick}>VisjsNetworkTest</button>
            </div>
        );
    }
}

export default VisjsNetworkTest