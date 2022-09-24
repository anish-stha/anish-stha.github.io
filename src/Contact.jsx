import React from 'react';
import ic_location from "./assets/ic_location.png";
import ic_email from "./assets/ic_email.png";
import ic_github from "./assets/ic_github.png";
import ic_linkedin from "./assets/ic_linkedin.png";

function Contact(props) {
    return (
        <div className="container text-left">
            <h1 style={{marginTop: '32px', textAlign: 'justify'}} className="text-muted">Contact</h1><br /><br />
            <h5 className="mb-3">Lets get in touch.</h5>

            <p>You can email me at &nbsp;
                <a  href="mailto:np.anishstha@gmail.com" target="_blank" style={{textDecoration: "none", fontWeight: "bold", color: "#616161"}}>
                    np.anishstha@gmail.com
                </a>
                <div className="mt-3 mb-3">
                    <a  href="mailto:np.anishstha@gmail.com" target="_blank">
                        <img className="contact-icon" src={ic_email}/>
                    </a>
                </div>

                or visit me in LinkedIn or take a look at my github: </p>
            <div className="d-flex  flex-row">
                <div>
                    <a href="https://github.com/anish01stha" target="_blank">
                        <img className="contact-icon" src={ic_github}/>
                    </a>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/anishstha/" target="_blank">
                        <img className="contact-icon" src={ic_linkedin}/>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Contact;