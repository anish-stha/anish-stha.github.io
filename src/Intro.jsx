import React from 'react';
import ic_location from "./assets/ic_location.png";
import ic_email from "./assets/ic_email.png";
import ic_github from "./assets/ic_github.png"
import ic_linkedin from "./assets/ic_linkedin.png";
import resume from "./assets/Resume.pdf";
import ReactTypingEffect from 'react-typing-effect';

function Intro(props) {
    return (
        <div className="intro-container">
            <img src="https://i.imgur.com/nN77LFa.png"
                 className="image-cover"/>
            <h1 className="splash-text">Anish Shrestha</h1>

            <ReactTypingEffect
                style={{marginBottom: "12px"}}
                text={["Software Engineer", "Full Stack Developer"]}
                cursorRenderer={cursor => <h2>{cursor}</h2>}
                speed={100}
                typingDelay={0}
                eraseSpeed={30}
                displayTextRenderer={(text, i) => {
                    return (
                        <h2 className="role">
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span key={key}>{char}</span>
                                );
                            })}
                        </h2>
                    );
                }}
            />

            {/*<h4 className="role">Software Engineer | Full Stack Developer</h4>*/}

            <h4 style={{width: "80%"}}>M.S. in Computer Science, Louisiana State University</h4>

            <p style={{width: "80%"}}>I am currently working as a Graduate Teaching Assistant in courses related to Software Engineering and Blockchain. I'm expecting to graduate in <b>December 2022</b> and will be looking for full-time roles.</p>
            <p style={{width: "80%"}} >Lets get in touch → <a href="mailto:np.anishstha@gmail.com" className="link">Email</a></p>

            <a href="https://drive.google.com/uc?export=download&id=1anT37t3MS7WbVgZM10Q8Ypdimf_XSrdW" download className="link">View Resume</a>

            <div className="icons">
                <div>
                    <img src={ic_location} height="20" width="20"/>
                    <span> Baton Rouge, Louisiana</span>
                </div>

                <div>
                    <a href="mailto:np.anishstha@gmail.com">
                        <img className="img-valign" src={ic_email}/>
                        <span>np.anishstha@gmail.com</span>
                    </a>
                </div>

                <div>
                    <a href="https://github.com/anish01stha" target="_blank">
                        <img className="img-valign" src={ic_github}/>
                        <span>Github</span>
                    </a>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/anishstha/" target="_blank">
                        <img className="img-valign" src={ic_linkedin}/>
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>



        </div>
    );
}

export default Intro;