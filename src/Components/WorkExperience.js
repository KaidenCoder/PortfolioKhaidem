import React from 'react'


const WorkExperience = () => {
    return (
        <>
            <div className="container">
                <div className="row" >
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>

                            <div className="card-body">
                                <h5 className="card-title">India Web Designs, (July 2019- Feb 2020)</h5>
                                <p className="card-text">
                                    Guwahati</p>
                                <p className="card-text">
                                    I was a website developer working mainly in WordPress and Backend development</p>
                                <a href="https://indiawebdesigns.in/" className="btn btn-primary m-1" target="_blank" rel="noopener noreferrer">Website</a>
                                <a href="https://drive.google.com/file/d/1xLZNJJgRtU5giFRDSg2RmUyhSQVIQbEI/view" className="btn btn-light" target="_blank" rel="noopener noreferrer">Certificate</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "" }}>

                            <div className="card-body">
                                <h5 className="card-title">CampK12 (June 2020 - Present)</h5>
                                <p className="card-text">
                                    Remote</p>
                                <p className="card-text">
                                    I am a JavaScript instructor teaching K-12 kids through various projects </p>
                                <a href="https://campk12.com/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Website</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorkExperience
