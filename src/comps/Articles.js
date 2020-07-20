import React from 'react';
import './Articles.css';
import caoImg from '../assets/caoImg.png';
import cdoImg from '../assets/cdoImg.png';
import ceoImg from '../assets/ceoImg.png';
import cioImg from '../assets/cioImg.png';
import cvoImg from '../assets/cvoImg.png';
import internImg from '../assets/internImg.png';
import hrImg from '../assets/hrImg.png';
import mmImg from '../assets/mmImg.png';
import workImg1 from '../assets/workImg1.png';
import workImg2 from '../assets/workImg2.png';

function Articles(){
    
        return(
            <div id="mainInsert">
                <h1 className="highlightHeadings">About AudioHive and our team</h1>
                <br></br>
                <h2 className="highlightHeadings">Our History</h2> 
                <p>Since 2010, we at Audio Hive have been gradually establishing ourselves as a major
player in the live sound industry.
Today we have done just that, leaving an indelible mark in the industry which leaves our
name synonymous with the term industry giant. Our 10 years of experience started off in
what our colleague Luke dubbed the Disco Van. It was a vehicle that doubled as a PA
system. We would travel to locations in it and provide audio, visuals and broadcasting
services from it. Sadly, the Disco Van idea never got off the ground due to logistical
reasons, however, that minor setback lead us to far greater things.</p>
                <br></br>
                <h2 className="highlightHeadings">Company Profile</h2> 
                <p>Today we specialise in providing equipment, engineers and audio/visual recording for
small live music events. These events usually have between 2 000 and 10 000 people in
attendance.
Additionally we edit the recorded content to create a cohesive digital product. We can
also provide it as a DVD. Additionally we offer the option of broadcasting the event, as
long as a prior arrangement has been made with the respective television company.
Due to the rise of technology and online streaming services most of our audio/visual work
has been streaming shows on social media. If the client requests we can assist in making
the product a pay-per-view on their own site and other sites such as YouTube.</p>
                <br></br>
                <h2 className="highlightHeadings">The Engine Room
(Our Team)</h2>
                <p>Audio-Hive has an elite team of 25 people that work to ensure the company runs
smoothly. The friendship in the company runs all the way from management to the
muscle-bound riggers and stage hands. We know nobody wants to read a list of 160
names so below is just our main staff, if you wish to know the rest of the staff feel free
to email us and we will supply you with a comprehensive list.</p>
                <br></br>
                <h3 className="highlightHeadings">Jordan Sapire</h3>
                <h3 className="highlightHeadings">(Chief Executive Officer)</h3>
                <img className="profilePics" src={ceoImg} alt="Profile" />
                <p>Jordan’s expert music and live sound knowledge has guided this company from its
inception into what it is today. Always the one to make sure the job gets done, Jordan
is one of the main reasons we’ve made it thus far.</p>
                <br></br>
                <h3 className="highlightHeadings">Mukundi Mudau</h3>
                <h3 className="highlightHeadings">(Chief Human Resources Officer & Radio DJ)</h3>
                <img className="profilePics" src={hrImg} alt="Profile" />
                <p>Mukundi offers a wide range of technical knowledge and expertise, especially in the
broadcasting field. He sits on the panels of major talent shows in the country and is
one of the foremost radio personalities around, so you can only imagine how much he
talks (it’s a lot).</p>
                <br></br>
                <h3 className="highlightHeadings">Buhle Hlayisi</h3>
                <h3 className="highlightHeadings">(Chief Marketing Officer)</h3>
                <img className="profilePics" src={mmImg} alt="Profile" />
                <p>An excellent business mind and strategist, Buhle has been the mastermind behind our
company’s ever expanding reach through advertising and social media, which is now
across most of the Southern African region with hopes of spreading to other continents
soon.</p>
                <br></br>
                <h3 className="highlightHeadings">Luke Beckwith</h3>
                <h3 className="highlightHeadings">(Chief Design Officer)</h3>
                <img className="profilePics" src={cdoImg} alt="Profile" />
                <p>Our team’s creative genius. Stage design, lights, aesthetics, lasers, this man does it all,
and he has the reputation and portfolio to back him up. One of the reasons we
constantly get booked as a company is the artistic imagery that Luke and his team
provide at our events. Book him again and Luke will come back with even greater
visuals.</p>
                <br></br>
                <h3 className="highlightHeadings">Sfiso Msithini</h3>
                <h3 className="highlightHeadings">(Chief Analytics Officer and Director)</h3>
                <img className="profilePics" src={caoImg} alt="Profile" />
                <p>Another one of our imaginative and creative visionaries. An expert behind the camera,
Sfiso constantly delivers the perfect pictures for our clients. Currently being honoured
as one of the foremost up and coming directors on the continent, this is the man you
want if you have any visuals in mind.</p>
                <br></br>
                <h3 className="highlightHeadings">Kieran Pritchard</h3>
                <h3 className="highlightHeadings">(Chief Information Technology Officer)</h3>
                <img className="profilePics" src={cioImg} alt="Profile" />
                <p>Our technical expert or Hackerman as we call him. Kieran holds masters degrees in
both electrical engineering and information technology. A Panelist at every MediaTech
since 2010, his vast knowledge and expertise helps us provide the best quality in
systems and equipment for our clients, and helps keep us ahead of the industry with
the newest technology out there.</p>
                <br></br>
                <h3 className="highlightHeadings">Buyi Ramashiya</h3>
                <h3 className="highlightHeadings">(Chief Visionary Officer)</h3>
                <img className="profilePics" src={cvoImg} alt="Profile" />
                <p>Stephen King once said that quiet people have the loudest minds, this can’t be any
more true for Buyi. A talented creative and photographer, Buyi is the driving force
behind the direction we take as a company in terms of the products and services we
offer and our future growth as a brand. Buyi and Sfiso work hand in hand in delivering
the best audio-visuals around, as Audio Visual magazine said.</p>
                <br></br>
                <h3 className="highlightHeadings">Sonke Mzolo</h3>
                <h3 className="highlightHeadings">(Intern)</h3>
                <img className="profilePics" src={internImg} alt="Profile" />
                <p>Sonke is our newest member who is currently interning in our company. He has the
privilege of rolling cables after shows and pushing flight cases for our various
productions and acts as a bit of a lackey. If he keeps working as hard as he has, we
think that he will surely have a bright future ahead of him.</p>
                <br></br>
                <h3 className="highlightHeadings">The Rest of Our Team</h3>
                <span>
                    <img className="workPics" src={workImg1} alt="Profile" />
                    <img className="workPics" src={workImg2} alt="Profile" />
                </span>
                <p>We at Audio Hive strive to be a multicultural team of like minded creative individuals.
Placing quality as our top priority, second only to our mission of training and employing
members of local community’s to take interest in the creative craft and industry.
Our mission is to grow and in doing so make our communities a better place by
teaching and growing those around us to share our knowledge.
We at Audio Hive are doing our best to grow our business and team by growing the
community.</p>
                <br></br>
                

            </div>
        )
    
}

export default Articles;