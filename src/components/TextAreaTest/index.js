import React from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';

class TextAreaTest extends React.Component {

    state = {}

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        //alert(value);
        this.setState({
            value: value,
        })
    }

    render() {
        return (
            <div>
                <h1>TextAreaTest</h1>
                <FormGroup>
                    <FormControl
                        style={{height: '200px'}}
                        componentClass="textarea"
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </FormGroup>
            </div>
        );
    }
}

export default TextAreaTest;