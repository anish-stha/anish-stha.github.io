import React from 'react';
import ic_location from "./assets/ic_location.png";
import ic_email from "./assets/ic_email.png";
import ic_github from "./assets/ic_github.png"
import ic_linkedin from "./assets/ic_linkedin.png";
import ReactTypingEffect from 'react-typing-effect';

function Intro(props) {
    return (
        <div className="intro-container">
            <img src="https://i.imgur.com/nN77LFa.png"
                 className="image-cover"/>
            <h1 className="splash-text">Anish Shrestha</h1>

            {/*<ReactTypingEffect*/}
            {/*    text={["Software Engineer", "Full Stack Developer"]}*/}
            {/*    cursorRenderer={cursor => <h2>{cursor}</h2>}*/}
            {/*    speed={100}*/}
            {/*    typingDelay={0}*/}
            {/*    eraseSpeed={30}*/}
            {/*    displayTextRenderer={(text, i) => {*/}
            {/*        return (*/}
            {/*            <h2 className="role">*/}
            {/*                {text.split('').map((char, i) => {*/}
            {/*                    const key = `${i}`;*/}
            {/*                    return (*/}
            {/*                        <span key={key}>{char}</span>*/}
            {/*                    );*/}
            {/*                })}*/}
            {/*            </h2>*/}
            {/*        );*/}
            {/*    }}*/}
            {/*/>*/}

            <h4 className="role">Software Engineer | Full Stack Developer</h4>
            <h4>Louisiana State University</h4>


            <div className="icons">
                <div>
                    <img src={ic_location} height="20" width="20"/>
                    <span> Baton Rouge, Louisiana</span>
                </div>

                <div>
                    <a className="icons_link" href="mailto:np.anishstha@gmail.com">
                        <img className="img-valign" src={ic_email}/>
                        <span>np.anishstha@gmail.com</span>
                    </a>
                </div>

                <div>
                    <a className="icons_link" href="https://github.com/anish01stha">
                        <img className="img-valign" src={ic_github}/>
                        <span>Github</span>
                    </a>
                </div>

                <div>
                    <a className="icons_link" href="https://www.linkedin.com/in/anishstha/">
                        <img className="img-valign" src={ic_linkedin}/>
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>

            <a href="" className="link">View Resume</a>

        </div>
    );
}

export default Intro;