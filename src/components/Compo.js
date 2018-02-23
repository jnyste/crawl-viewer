import React, { Component } from 'react';

class CharacterSelect extends Component {

    validateFile() {
        var reader = new FileReader();
        alert("Hello!");
    }

    render() {
        return(
            <div>
                <form>
                    <input id="characterFileInput" type="file" accept=".txt" onChange={this.validateFile}/>
                </form>
            </div>
        );
    }
}

export default CharacterSelect;