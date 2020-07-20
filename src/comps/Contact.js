import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/fontawesome-free-brands';

function Contact(){
    
        return(
            <div id="mainInsert">
                <h2 className="highlightHeadings">Contact Us</h2>
                <h3 className="highlightHeadings">To Contact us:</h3>
                <h3>Send us an Email at:  </h3>
                <a href="mailto: Audiohiveproject@gmail.com">Audiohiveproject@gmail.com</a>
                <br></br>
                <br></br>
                <FontAwesomeIcon className="contactSymbols" icon={faTwitter}/>
                <h3>Drop us a message on twitter:</h3>
                <a href="https://twitter.com/AudioHivePro">@AudioHivePro</a>
                <br></br>
                <br></br>
                <FontAwesomeIcon className="contactSymbols" icon={faInstagram}/>
                <h3>Or Dm us on instagram: </h3>
                <a href="https://www.instagram.com/audiohivepro/">audiohivepro</a>
            </div>
        )
    
}

export default Contact;