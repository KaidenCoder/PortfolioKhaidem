import React from 'react'
import Vit from '../images/vit_Fotor.png'
import Udacity from '../images/udacity_Fotor.png'
import CodingNinjas from '../images/codingninjas_Fotor.png'

const Education = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={Vit} alt="VIT" />
                            <div className="card-body">
                                <h5 className="card-title">Vellore Institute of Technology, Vellore (2013-2017)</h5>
                                <p className="card-text">I graduated in B-tech Civil Engineering with a CGPA of 8.48 </p>
                                <a href="https://drive.google.com/file/d/1fMdGlW1366yD37Yqbcr6gcSLQadxOd_W/view" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Certificate</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={Udacity} alt="Udacity" />
                            <div className="card-body">
                                <h5 className="card-title">Udacity, India (2019)</h5>
                                <p className="card-text">I graduated at Front End Web Developer Nanodegree </p>
                                <a href="https://graduation.udacity.com/confirm/7F2GVM25" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Certificate</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>
                            <img className="card-img-top" src={CodingNinjas} alt="Coding Ninjas" />
                            <div className="card-body">
                                <h5 className="card-title">CodingNinjas (2020-Present)</h5>
                                <p className="card-text">I am currently studying at Full Stack Web Development Career Camp, which is an online Bootcamp. </p>
                                <a href="https://profile.codingninjas.com/45d47747-5b0c-4c69-ba45-6ee2cc06e95e" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Education
