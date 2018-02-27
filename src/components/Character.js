import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel, Glyphicon} from 'react-bootstrap';
import CharacterSelect from './CharacterSelect';
import CharacterView from './CharacterView';

class Character extends Component {

    constructor(props) {
        super(props);
        this.state = {characterLoaded: false};    
        this.validateFile = this.validateFile.bind(this);
        var characterData;
    }

    validateFile(event) {
        var reader = new FileReader();
        reader.onload = (event) => {
            var newState = Object.assign({}, this.state);
            newState.characterLoaded = true;
            this.characterData = event.target.result;
            this.characterData = this.characterData.replace(/\n/g, "\r\n");
            this.setState(newState);
        }
        var characterFile = document.querySelector("#characterSelect").files[0];
        reader.readAsText(characterFile);
    }

    render() {
        if (this.state.characterLoaded === false) {
            return (<CharacterSelect uploadAction={this.validateFile}/>);
        } else {
            return (<CharacterView data={this.characterData}/>);
        }
    }
}

export default Character;