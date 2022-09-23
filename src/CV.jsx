import React from 'react';

function Cv(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div style={{marginTop: '32px', textAlign: 'justify'}}>
                        <div style={{marginTop: '3vh', textAlign: 'left'}}>
                            <div style={{fontFamily: 'Roboto, sans-serif', fontSize: '32px'}}>
                                <b>Hello there!</b>&nbsp;<span className="waving-hand"> 👋</span><br/>
                                I am Anish Shrestha.
                            </div>
                            <br/>
                            <p>Welcome to the little corner of the Internet that is mine.
                                I am a Computer Science graduate student in Louisiana State University who travelled
                                half way across the world from a beautiful South Asian country Nepal. Prior to joining LSU, I worked as a
                                software engineer in a startup. Being part of the core team I led many aspects of web
                                development, mobile application development and got to research in
                                Blockchain research. Now I am working as a Teaching Assistant and will graduate in December 2022.
                                I am looking for full-time roles starting from January and would like to connect with potential
                                employers.</p>
                        </div>
                        <hr/>

                        <div>
                            <div id="education" style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '22px'}}>
                                <b>Education</b></div>
                            <br/>
                            <strong>MS in Computer Science</strong><br/>
                            <p>
                                Louisiana State University, Baton Rouge (Jan 2021 – Present)<br/>
                            </p>
                            <strong>Bachelors in Computer Engineering</strong><br/>
                            <p>
                                Tribhuvan University, Kathmandu, Nepal (2014 – 2018)
                            </p>
                        </div>
                        <hr/>

                        <div>
                            <div id="skills" style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '22px'}}>
                                <b>Core Skills</b></div>
                            <br/>
                            <strong>Programming:</strong>
                            <p>
                                <span className="badge bg-secondary">Java</span>&nbsp;
                                <span className="badge bg-secondary">javascript</span>&nbsp;
                                <span className="badge bg-secondary">Python</span>&nbsp;
                                <span className="badge bg-secondary">C++</span>&nbsp;
                            </p>

                            <strong>Frameworks:</strong>
                            <p>
                                <span className="badge bg-secondary">ReactJS</span>&nbsp;
                                <span className="badge bg-secondary">Hibernate</span>&nbsp;
                                <span className="badge bg-secondary">Spring Boot</span>&nbsp;
                                <span className="badge bg-secondary">Pandas</span>&nbsp;
                                <span className="badge bg-secondary">Android</span>&nbsp;
                                <span className="badge bg-secondary">NodeJS</span>&nbsp;
                            </p>

                            <strong>Database:</strong>
                            <p>
                                <span className="badge bg-secondary">MongoDB</span>&nbsp;
                                <span className="badge bg-secondary">PostgresSQL</span>&nbsp;
                                <span className="badge bg-secondary">Redis</span>&nbsp;
                            </p>

                            <strong>Tools:</strong>
                            <p>
                                <span className="badge bg-secondary">Docker</span>&nbsp;
                                <span className="badge bg-secondary">Jenkins</span>&nbsp;
                                <span className="badge bg-secondary">Portainer</span>&nbsp;
                                <span className="badge bg-secondary">MQTT</span>&nbsp;
                                <span className="badge bg-secondary">Kafka</span>&nbsp;
                            </p>

                            <strong>Design:</strong>
                            <p>
                                <span className="badge bg-secondary">Adobe Illustrator</span>&nbsp;
                                <span className="badge bg-secondary">Adobe After Effects</span>&nbsp;
                                <span className="badge bg-secondary">Adobe Indesign</span>&nbsp;
                                <span className="badge bg-secondary">Figma</span>&nbsp;
                            </p>
                        </div>
                        <hr/>

                        <div>
                            <div id="experience" style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '22px'}}>
                                <b>Experience</b></div>
                            <br/>

                            <strong>Graduate Teaching Assistant</strong><br/>
                            <p>Louisiana State University, Baton Rouge (Jan 2021 - present)<br/></p>
                            <ul>
                                <li>Led Blockchain and Cryptography course with IBM team to integrate IBM Blockchain
                                    Platform into course material.
                                </li>
                                <li>Led labs for courses related to Java Programming, Numerical methods, and Matlab.
                                </li>
                                <li>Designed Hyperledger Fabric assignments and projects for senior level undergraduate
                                    class.
                                </li>
                            </ul>

                            <strong>Software Engineer</strong><br/>
                            <p>Sireto Technology, Nepal (Sept 2018 - Dec 2020)<br/></p>
                            <ul>
                                <li>One of the first 3 employees of this Startup. Handled the Front-End and Mobile
                                    Application Development of every project.
                                </li>
                                <li>Developed ReactJs based Single Page Applications and React Native/Flutter based
                                    cross platform mobile applications.
                                </li>
                                <li>Extensively used React, Redux, TypeScript, Java, Spring boot and Hibernate ORM. Also
                                    used Docker and Jenkins.
                                </li>
                                <li>Developed and integrated Spring-Boot based microservices.</li>
                            </ul>


                            <strong>Blockchain Research Intern</strong><br/>
                            <p>Sireto Technology, Nepal (Sept 2018 - Dec 2020)<br/></p>
                            <ul>
                                <li>Learned cryptographic algorithms and analysis of security vulnerabilities in
                                    Ethereum smart contracts written in Solidity.
                                </li>
                                <li>Implemented Kademlia protocol for node discovery and message transmission in a P2P
                                    network.
                                </li>
                                <li>Created and reviewed ERC20 reusable general purpose smart contracts to store user
                                    profile and balance data.
                                </li>
                            </ul>

                            <strong>Software Engineering Intern</strong><br/>
                            <p>Togglecorp Solutions, Nepal (Jan 2017 - Dec 2018)<br/></p>
                            <ul>
                                <li>Worked with humanitarian teams to design and finalize mockups for a big data
                                    analysis platform thedeep.io.
                                </li>
                                <li>Designed graphic assets and animations to be used in web platforms using Adobe
                                    Illustrator and After Effects.
                                </li>
                                <li>Developed android application for indexing and search of digital books.</li>
                            </ul>
                        </div>
                        <hr/>

                        <div style={{marginTop: '2vh', textAlign: 'left'}}>
                            <div align="justify" id="honors"
                                 style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '22px'}}>
                                <b>Honors and Awards</b>
                            </div>
                            <br/>
                            <p>

                                <img className="emoji" title=":trophy:" alt=":trophy:"
                                     src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                                     height="20" width="20"/>
                                <b>Presenter,</b> Selected for Demo presentation, Mobicom 2021, New Orleans.

                            </p>

                            <p>

                                <img className="emoji" title=":trophy:" alt=":trophy:"
                                     src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                                     height="20" width="20"/>
                                <b>Organizer,</b> Hack-A-Week hackathon, Locus, 2021

                            </p>

                            <p>

                                <img className="emoji" title=":trophy:" alt=":trophy:"
                                     src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                                     height="20" width="20"/>
                                <b>Certified,</b> Artificial Intelligence micromasters(Certificate ID: <a
                                href={"https://courses.edx.org/certificates/618c297a6309414d9b5d26d261197041"}>618c297a6309414d9b5d26d261197041</a>)

                            </p>

                            <p>

                                <img className="emoji" title=":trophy:" alt=":trophy:"
                                     src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                                     height="20" width="20"/>
                                <b>Fellowship Recipient,</b> Fusemachines Nepal AI Fellowship’ program by Fusemachines,
                                2018.

                            </p>

                            <p>

                                <img className="emoji" title=":trophy:" alt=":trophy:"
                                     src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                                     height="20" width="20"/>
                                <b>2nd Runner Up, </b>Yomari Code Camp, 2016

                            </p>

                            <p>

                                <img className="emoji" title=":trophy:" alt=":trophy:"
                                     src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                                     height="20" width="20"/>
                                <b>1st Runner Up, </b>Yomari Code Camp, 2015

                            </p>

                            <p>

                                <img className="emoji" title=":trophy:" alt=":trophy:"
                                     src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                                     height="20" width="20"/>
                                <b>2st Runner Up, </b>Locus Code Camp, 2015

                            </p>

                            <p>

                                <img className="emoji" title=":trophy:" alt=":trophy:"
                                     src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                                     height="20" width="20"/>
                                <b>Undergraduate Scholarship Recipient,</b> Selected among top 1% of 15,000 students of
                                nationwide undergraduate applicants.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cv;