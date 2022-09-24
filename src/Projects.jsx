import React from 'react';
import ic_redirect from "./assets/ic_redirect.png";


const project_data = [{
    project_name: "StartMark.de",
    project_description: "An investment platform that offers an ERC20 security token as proof of investment.",
    project_points: ["I worked closely with stakeholder and developers for requirement and bug analysis.", "Used Figma to design initial Mockups.", "I spearheaded the Developed of client side application, and mobile applications, integration with microservices."],
    project_url: "https://www.startmark.de/",
    project_image: "https://i.imgur.com/OXBGOeK.png",
    tags: ["Java", "Spring-Boot", "ReactJs", "Typescript", "React Native", "REST API", "Ethereum", "Solidity"]
}, {
    project_name: "Fluidensity.de",
    project_description: "A platform for artists to tokenize their art and sculptures and host Initial Public Offerings.",
    project_url: "https://www.fluidensity.de/",
    project_points: [],
    project_image: "https://i.imgur.com/KaUBy6x.png",
    tags: ["ReactJs", "Javascript"]
}, {
    project_name: "ID21",
    project_description: "A web solution for form creation and sharing to securely collect user responses with core focus of data privacy and encryption.",
    project_points: ["I led the development of an interactive form designing portal with a team of Junior developers.", "Using ReactJs, with ECIES encryption algorithms in the client side, we delivered a highly secure and robust data collection platform"],
    project_url: "",
    project_image: "",
    tags: ["ReactJs", "Javascript", "Spring-Boot"]
}, {
    project_name: "Decentralized Secure Could Storage Using Blockchain",
    project_description: "During my final year of my undergraduate studies, we converted a very difficult technology into a real-world application. We integrated a distributed stack made upon Kademlia protocols with the Ethereum Blockchain. This project was a huge undertaking but with the guidance of our mentor Er. Sandip Pandey and our professor, Dr. Subarna Shakya, we completed this huge project.",
    project_points: [],
    project_url: "",
    project_image: "",
    tags: ["Java", "Android", "Kademlia", "React Js"]
},
]

function Projects(props) {
    return (<div className="container">
        {
            project_data.map(each => (
                <div className="row" style={{minHeight: "300px", textAlign: "left"}}>
                    <div className="col-lg-9 col-sm-12">
                        <h3 className="project-name">{each.project_name}</h3>
                        <div>
                            {
                                each.tags.map(each_tag => (
                                    <span className="badge bg-light text-dark border"
                                          style={{marginRight: "8px", marginBottom: "16px"}}>{each_tag}</span>
                                ))
                            }
                        </div>
                        <p>{each.project_description}</p>
                        <ul className="project-points">
                            {
                                each.project_points.map(each_point => (
                                    <li>{each_point}</li>
                                ))
                            }
                        </ul>
                        {each.project_url && <>Visit platform: <a href={each.project_url} target="_blank" style={{
                            textDecoration: "none",
                            color: "#0D47A1"
                        }}>{each.project_url}
                            <img className="img-valign" src={ic_redirect}
                                 style={{height: 16, width: 16, opacity: 0.3, marginLeft: 8}}/>
                        </a>
                        </>}
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        {each.project_image && <img src={each.project_image} className="project-image"/>}
                    </div>
                    <hr style={{marginTop: "16px", marginBottom: "16px", height: "2px", borderTop: "1px solid gray"}}/>
                </div>
            ))
        }
    </div>);
}

export default Projects;