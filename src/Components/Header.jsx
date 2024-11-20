import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header className="header">
            <Link className="site-logo" to="/">#DANACAFE</Link>
            <nav>
                <NavLink 
                    to="/events"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Events
                </NavLink>
                <NavLink 
                    to="/customerlogin"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Customer Login
                </NavLink>
                <NavLink 
                    to="/stafflogin"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Staff Login
                </NavLink>
            </nav>
        </header>
    )
}