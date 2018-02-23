import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel, Glyphicon} from 'react-bootstrap';

class CharacterSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {active: true};    
        this.validateFile = this.validateFile.bind(this);    
    }

    validateFile() {
        var reader = new FileReader();
        var file = document.querySelector("#characterSelect").files[0];
        reader.onload = function(event) {
            console.log(event.target.result);
        }
        reader.readAsText(file);
    }

    render() {
        if (this.state.active) {
            return(
                <FormGroup controlId="characterSelect">
                <ControlLabel id="characterSelectLabel"><Glyphicon glyph="upload"/> Upload Character File</ControlLabel>
                <FormControl
                    type="file"
                    onChange={this.validateFile}>
                </FormControl>
                </FormGroup>
            );
        } else { return null }
    }
}

export default CharacterSelect;