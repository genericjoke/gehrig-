import React from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Header() {
    return (
        <div>
            <Button.Group>
                <NavLink className="nav-btn" to="/thoughts">
                    <Button className="nav-btn">OUR THOUGHTS ON GEHRIG!!!</Button>
                </NavLink>
                <Button.Or />
                <NavLink to="/">
                    <Button className="nav-btn">HIS SICK DRIP</Button>
                </NavLink>
                <Button.Or />
                <NavLink to="/feedback">
                    <Button className="nav-btn">FEEDBACK ON GEHRIG</Button>
                </NavLink>
            </Button.Group>
        </div>
    )
}


export default Header;