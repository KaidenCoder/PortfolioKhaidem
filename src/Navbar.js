import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" exact to="/skills"><button type="button" className="btn btn-outline-primary btn-lg">Skills</button></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/education"><button type="button" className="btn btn-outline-primary btn-lg">Education</button></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/workexp"><button type="button" className="btn btn-outline-primary btn-lg">Work Experience</button></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/projects"><button type="button" className="btn btn-outline-primary btn-lg">Projects</button></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/contact"><button type="button" className="btn btn-outline-primary btn-lg">Contact</button></NavLink>
                </li>

            </ul>

        </>
    )
}

export default Navbar
