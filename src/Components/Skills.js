import React, { useState } from 'react';
import LanguageSkill from "../Datafiles/LanguageData.json"
import { Line } from 'react-chartjs-2'
import './Components.css';
import Dimensions from './WindowDimen'



const Skills = () => {

    const [skillData, setSkillData] = useState(LanguageSkill)

    const { width } = Dimensions();


    const lineChart = (
        skillData.length ? (
            <Line
                data={{
                    labels: skillData.map((l) => l.language),
                    datasets: [
                        {
                            data: skillData.map((a) => a.level),
                            label: "Language Skills",
                            borderColor: "red",
                            fill: true
                        }
                    ]
                }}

            />) :
            "Loading"
    )

    return (

        <div className="lineChart" style={{ margin: "auto", padding: "20px 0 40px 0" }}>
            <h2 className="skilltitle">My Skills</h2>

            <p className="skilltitle" style={{ textDecoration: "underline" }}>Programming Language Skills</p>
            {width > 600 ? (<div style={{ width: "70%", margin: "auto" }}>
                {lineChart}
            </div>) : (
                <div style={{ width: "100%", margin: "auto" }} >
                    {lineChart}
                </div>)}

            <p className="skilltitle" style={{ textDecoration: "underline" }}>Platform and Systems</p>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link btn btn-light" style={{ color: "black", margin: "3%" }}>Github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light" style={{ color: "black", margin: "3%" }}>Node.js</a>
                </li>

            </ul>


            <p className="skilltitle" style={{ textDecoration: "underline" }}>Frameworks, Libraries and Database</p>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link btn btn-light" style={{ color: "black", margin: "3%" }}>React</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light" style={{ color: "black", margin: "3%" }}>Bootstrap</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light" style={{ color: "black", margin: "3%" }}>MongoDB</a>
                </li>

            </ul>

        </div>

    )
}

export default Skills
