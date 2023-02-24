import React from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Header() {
    return (
        <div>
            {/* <Button.Group id='socials'>
                <a href='https://www.youtube.com/ufc' target='_blank' rel="noreferrer"><Button circular color='youtube' icon='youtube' /></a>
                <a href='https://facebook.com/ufc' target='_blank' rel="noreferrer"><Button circular color='facebook' icon='facebook' /></a>
                <a href='https://twitter.com/ufc' target='_blank' rel="noreferrer"><Button circular color='twitter' icon='twitter' /></a>
                <a href='https://www.instagram.com/ufc/' target='_blank' rel="noreferrer"><Button circular color='instagram' icon='instagram' /></a>
            </Button.Group> */}
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