import React from 'react';
import './Products.css';

function Products(){
    
        return(
            <div id="mainInsert">
                <h2 className="highlightHeadings">Products & Services</h2>
                <br></br>
                <h3 className="highlightHeadings">Below you can find some of the products and services we have to offer.</h3>
                <ul>
                    <li>Audio recording of live music events</li>
                    <li>Visual recording of live music events</li>
                    <li>Broadcating live music events</li>
                    <li>Audio engineering of live music events</li>
                    <li>Equip rental for small live music events</li>
                    <li>Production of streaming services and pay per view for live music shows</li>
                </ul>
                <br></br>
                <h3 className="highlightHeadings">We have the following Equipment on hand</h3>
                <table id="equipTable">                    
                        <caption>Equipment List</caption>                    
                    <tr>
                        <th>Audio</th>
                        <th>Visual</th>
                    </tr>
                    <tr>
                        <td>2x Shure Beta 52</td>
                        <td>700Dx2 canon camera</td>
                    </tr>
                    <tr>
                        <td>2x Shure Beta 91</td>
                        <td>70D canon camera</td>
                    </tr>
                    <tr>
                        <td>8x Shure SM57</td>
                        <td>3x benro Tripods</td>
                    </tr>
                    <tr>
                        <td>5x Shure Beta 98 AMP/C</td>
                        <td>Samyang lens kit</td>
                    </tr>
                    <tr>
                        <td>6x Shure PG81</td>
                        <td>2x Led light kit</td>
                    </tr>
                    <tr>
                        <td>5x Shure SM58</td>
                        <td>Color Gels</td>
                    </tr>
                    <tr>
                        <td>5x Passive Radial JDI</td>
                        <td>Dolly slider</td>
                    </tr>
                    <tr>
                        <td>2x Stereo Passive Radial JDI</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5x BSS Active DI</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>200m Run Distance</td>
                        <td></td>
                    </tr>
                </table>
                    <br></br>
                <table>
                        <caption>Stage</caption>                    
                    <tr>
                        <td>20x 1⁄2m Legs</td>
                    </tr>
                    <tr>
                        <td>20x 1m Legs</td>
                    </tr>
                    <tr>
                        <td>20x (1MX1M) Stage Platforms</td>
                    </tr>
                    <tr>
                        <td>20x (2MX2M) Stage Platforms</td>
                    </tr>
                    <tr>
                        <td>10x (5MX5M) Stage Platforms</td>
                    </tr>                    
                </table>
                <br></br>
                <table>
                    <caption>Sound Desk</caption>
                    
                    <tr>
                        <td>Allen & Heath Q32</td>      
                    </tr>
                </table>
                <br></br>
                <table>
                        <caption>Monitoring System</caption>                    
                    <tr>
                        <td>4x JBL PRX512M</td>
                        </tr>
                    <tr>
                        <td>4xIn-Ear Monitoring Systems</td></tr>
                </table>
                <br></br>
                <h4 className="highlightHeadings">This equipment list can be used to record various common live show instrument setups
which include drums, guitars, keys, woodwind, brass and string sections, piano and
vocals, and is versatile enough to record many other less common instrument setups
which might include marimbas and other orchestral percussion, traditional instruments,
and other digital instrumentation such as synthesizers and virtual instruments.</h4>
                <br></br>
                <h3 className="highlightHeadings">Software</h3>
                <p>In terms of Software, we work primarily in Pro Tools or Ableton Live, depending
on what preference there might be by the performers, event organisers or our
employers. If no preference exists, the team chooses the DAW that works best
with the available hardware, and the purpose of the show. Should the event
require the use of another DAW, our resident engineers have experience in
various other DAWs, such as Logic, Cubase, FL Studio, and others. If our
engineers have not worked on the required software before, the event organiser
will be required to source an engineer to man the software.</p>


            <br></br>
            </div>
        )
    
}

export default Products;