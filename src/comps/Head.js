import React, { Component } from 'react';
import './Head.css';
import AudioHiveLogo from '../assets/audiohiveName.png';


class Head extends Component{
    render(){
        return(
            <div id="h">
                
                    <img id="aHN" src={AudioHiveLogo} alt="AudioHive" />
                
            </div>
        )
    }
}

export default Head;