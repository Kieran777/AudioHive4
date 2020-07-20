import React from 'react';
import './Home.css';
import AudioHiveA from '../assets/audiohiveLogo.png'

function Home(){
    
        return(
            <div id="mainHome">
                <img id="aHA" src={AudioHiveA} alt="AudioHive" />
                <h1 className="highlightHeadings">Welcome to AudioHive</h1>
                <p>Specialising in providing audio and visual equipment, production and recordings of small live events since 2010.</p>
                <br></br>
                <h2 className="highlightHeadings">Promotional Videos</h2>
                <br></br>
                <iframe className="youtubeFrames" allowFullScreen="true" src="https://www.youtube.com/embed/q_FHjAtQjNk" title="Freshlyground Live-Ma’Cheri-Youtube">
                </iframe>
                <iframe className="youtubeFrames" allowFullScreen="true" src="https://www.youtube.com/embed/Bm-enRsVnB8" title="KAHN Morbee / Parlotones live performance: I’ll be there-Youtube">
                </iframe>
                <br></br>
                <h2 className="highlightHeadings">What The Media Says About Us</h2>
                <h4 className="highlightHeadings">The Record</h4>
                <p className="mediaQuotes">“Real up and comers in the world of live events and a company to keep any eye on.”</p>
                <h4 className="highlightHeadings">The Star Tonight</h4>
                <p className="mediaQuotes">“Amazing to see a young group of talented people doing so well”</p>
                <h4 className="highlightHeadings">Show Reel</h4>
                <p className="mediaQuotes">“Amazing to see a local company presenting a production on a technical standing
worthing of international standards.”</p>
                <h4 className="highlightHeadings">The Mail & Guardian</h4>
                <p className="mediaQuotes">“Such a delight to see a young group of culturally diverse people working together to
enrich local arts and culture”</p>
                <h4 className="highlightHeadings">Marketing Mix</h4>
                <p className="mediaQuotes">“Well equipped and highly qualified, great for all live music events”</p>
                <br></br>
            </div>
        )
    
}

export default Home;