import React from 'react'
import CovidMap from '../images/covidmap.png'
import Calendar from '../images/CalendarReact.png'
import ProfileCard from '../images/profilechallenge.png'
import meals from '../images/meals_Fotor.png'
import eCom from '../images/eCom.png'
import table from '../images/table.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={meals} alt="WPSC" />
                            <div className="card-body">
                                <h5 className="card-title">Meals App in Vanilla Js</h5>
                                <p className="card-text">You can see the details of every meal item, and you can bookmark and remove the bookmarked meal item. </p>
                                <a href="https://github.com/Kurosakicoder/MealsAppVanlliaJS" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                                </span></a>
                                <a href="https://kurosakicoder.github.io/MealsAppVanlliaJS/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faLink} size={"2x"} />
                                </span></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={eCom} alt="React Native" />
                            <div className="card-body">
                                <h5 className="card-title">eCommerce MERN Website</h5>
                                <p className="card-text">It is an eCommerce application made in the MERN stack. Here you can register, login, order products, search products. </p>
                                <a href="https://github.com/Kurosakicoder/SHOPCART" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                                </span></a>
                                <a href="https://khaidemshopcart.herokuapp.com/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faLink} size={"2x"} />
                                </span></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={table} alt="eehs" />
                            <div className="card-body">
                                <h5 className="card-title">React Table Sortable</h5>
                                <p className="card-text">This is a React Table app where you can sort the table in column order, and you have pagination enabled.</p>
                                <a href="https://github.com/Kurosakicoder/juvoxa" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                                </span></a>
                                <a href="https://kurosakicoder.github.io/juvoxa/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faLink} size={"2x"} />
                                </span></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={CovidMap} alt="CovidMap" />
                            <div className="card-body">
                                <h5 className="card-title">Covid19 Map DashBoard (May, 2021)</h5>
                                <p className="card-text">It is a small project display map, bar graph and data of the Covid-19 pandemic.</p>
                                <a href="https://github.com/Kurosakicoder/Covid19MapStatistics" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                                </span></a>
                                <a href="https://kurosakicoder.github.io/Covid19MapStatistics/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faLink} size={"2x"} />
                                </span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={Calendar} alt="Calendar" />
                            <div className="card-body">
                                <h5 className="card-title">Calendar Appointment App (May 2021)</h5>
                                <p className="card-text">
                                    It is an offline Calendar Appointment App which is an extension of the to-do list app. </p>
                                <a href="https://github.com/Kurosakicoder/CalendarAppointmentReact" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                                </span></a>
                                <a href="https://kurosakicoder.github.io/CalendarAppointmentReact/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faLink} size={"2x"} />
                                </span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={ProfileCard} alt="Profile card" />
                            <div className="card-body">
                                <h5 className="card-title">FrontendMentor Profile Card Challenge</h5>
                                <p className="card-text">I coded this challenge in HTML and CSS, and I have passed the challenge.   </p>
                                <a href="https://github.com/Kurosakicoder/Profilecard-FrontEndMentor" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                                </span></a>
                                <a href="https://kurosakicoder.github.io/Profilecard-FrontEndMentor/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faLink} size={"2x"} />
                                </span></a>
                                <a href="https://www.frontendmentor.io/solutions/html-andand-css-uQjv1pnJH" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faLink} size={"2x"} />
                                </span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Projects
