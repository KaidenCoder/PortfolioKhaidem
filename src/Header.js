import React from 'react'
import ProfileImage from './images/kurosaki.jpeg'
import Leetcode from './images/leetcode_Fotor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <>

            <div className="container profile-image-section">
                <div className="row">
                    <div className="col-sm">
                        <img className="profile-image" src={ProfileImage} width="300" alt="Profile picture" />
                    </div>
                    <div className="col-sm bio-data">
                        <h1 className="name">Khaidem Sandip Singha</h1>
                        <h4>Front End Web Developer</h4>
                        <p>I am a front end web developer who specialises mainly in Javascript, HTML, CSS and Reacts Js.</p>
                        <div className="contact-number">
                            <a href="tel:+91-8638580905" className="contact-style"><span style={{ fontSize: 16, color: "black" }}>
                                <FontAwesomeIcon icon={faPhoneSquare} size={"1x"} />
                            </span> +91-8638580905</a>
                            <a href="mailto: khaidemsandipsingha@gmail.com" className="contact-style"><span style={{ fontSize: 16, color: "black" }}>
                                <FontAwesomeIcon icon={faEnvelope} size={"1x"} />
                            </span> khaidemsandipsingha@gmail.com</a>

                        </div>

                        <div className="contact-number">
                            <a href="https://www.linkedin.com/in/khaidemsandip/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "rgb(14, 79,181)" }}>
                                <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                            </span> </a>
                            <a href="https://github.com/Kurosakicoder" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                            </span></a>

                            <a href="https://leetcode.com/Kurosakicoder/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                <img style={{ paddingTop: "5px" }} src={Leetcode} width="20" alt="Leetcode" />
                            </span></a>

                            <a href="https://twitter.com/KurosakiCoder" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "rgb(29, 136, 229)" }}>
                                <FontAwesomeIcon icon={faTwitterSquare} size={"2x"} />
                            </span></a>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Header
