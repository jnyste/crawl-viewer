import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel, Glyphicon} from 'react-bootstrap';

function CharacterSelect(props) {
    return(
        <FormGroup controlId="characterSelect">
            <ControlLabel id="characterSelectLabel"><Glyphicon glyph="upload"/> Upload Character File
            </ControlLabel>
            <FormControl
            type="file"
            onChange={props.uploadAction}>
            </FormControl>
        </FormGroup>
    );
}

export default CharacterSelect;