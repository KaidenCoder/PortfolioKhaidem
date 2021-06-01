import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <>
            <div style={{ textAlign: "center", padding: "2%" }}>
                <a href="https://www.linkedin.com/in/khaidemsandip/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "rgb(14, 79,181)" }}>
                    <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                </span> </a>
                <a href="https://twitter.com/KurosakiCoder" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "rgb(29, 136, 229)" }}>
                    <FontAwesomeIcon icon={faTwitterSquare} size={"2x"} />
                </span></a>
                <p>Please connect me on LinkedIn and Twitter. You can message me anytime. I am looking forward to getting in touch with you.</p>
            </div>
            <div style={{ textAlign: "center", padding: "1% 0 2% 0" }}>
                <a href="tel:+91-8638580905" className="contact-style"><span style={{ fontSize: 16, color: "black" }}>
                    <FontAwesomeIcon icon={faPhoneSquare} size={"1x"} />
                </span> +91-8638580905</a>
                <a href="mailto: khaidemsandipsingha@gmail.com" className="contact-style"><span style={{ fontSize: 16, color: "black" }}>
                    <FontAwesomeIcon icon={faEnvelope} size={"1x"} />
                </span> khaidemsandipsingha@gmail.com</a>
                <p><small className="text-muted"> In case you want my contact details, here are my phone number and email-id. Please feel free to contact me.</small></p>
            </div>

        </>
    )
}

export default Contact
