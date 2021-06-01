import React from 'react'
import CovidMap from '../images/covidmap.png'
import Calendar from '../images/CalendarReact.png'
import ProfileCard from '../images/profilechallenge.png'
import WPSC from '../images/wpsc.png'
import ReactNative from '../images/reactnative_Fotor.png'
import EEHS from '../images/eehs.png'
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
                            <img className="card-img-top" src={CovidMap} alt="CovidMap" />
                            <div className="card-body">
                                <h5 className="card-title">Covid19 Map DashBoard (May, 2021)</h5>
                                <p className="card-text">It is a small project display map, bar graph and data of the Covid-19 pandemic.

                                Fetched Apis to deliver the covid19 data on the front end.

Configured the map and bar graph using npm libraries and used bootstrap to scale the web page automatically. </p>
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
                                    It is an offline Calendar Appointment App which is an extension of the to-do list app. Storing and fetching the data locally from a JSON file Deployed bootstrap to automatically scale web page to mobile & configured images to have a specific width on the page </p>
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
                                <h5 className="card-title">FrontendMentor Profile Card Challenge (May 2021)</h5>
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
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={WPSC} alt="WPSC" />
                            <div className="card-body">
                                <h5 className="card-title">World Puzzle & Sudoku Offline Stats (May 2020)</h5>
                                <p className="card-text">It is a world sudoku and puzzle championship statistics website. It is build using Javascript and D3.js library  </p>
                                <a href="https://github.com/Kurosakicoder/wpsc_d3js" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                                </span></a>
                                <a href="https://wpscmedals.herokuapp.com/ui/countrysudoku.html" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faLink} size={"2x"} />
                                </span></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={ReactNative} alt="React Native" />
                            <div className="card-body">
                                <h5 className="card-title">React Native Demo News App (May 2020)</h5>
                                <p className="card-text">It is build using React Native and fetch data from newsapi.org. It is available in Google Play Store.  </p>
                                <a href="https://github.com/Kurosakicoder/ReactNativeNewsApp" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                                </span></a>
                                <a href="https://play.google.com/store/apps/details?id=com.reactcovidapp" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faLink} size={"2x"} />
                                </span></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={EEHS} alt="eehs" />
                            <div className="card-body">
                                <h5 className="card-title">School Website Demo (Feb 2020)</h5>
                                <p className="card-text">It is a demo school website made in Python and Bootstrap.  </p>
                                <a href="https://github.com/Kurosakicoder/ees" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
                                    <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
                                </span></a>
                                <a href="http://kurosakicoder.pythonanywhere.com/" className="contact-style" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: 16, color: "black" }}>
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
