import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome, faHeart } from "@fortawesome/free-solid-svg-icons";

const tabs = [{
    route: '/',
    icon: faHome,
    label: "Home"
},{
    route: "/search",
    icon: faSearch,
    label: "Cari"
},{
    route: "/favorite",
    icon: faHeart,
    label: "Favorite"
}];

const Navigation = () => {
    return (
        <div>
            {/* Top Bar */}
            <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
                <div className="container">
                    <a className="navbar-brand" href="/">Lirik Lagu</a>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/search" className="nav-link">
                                Cari
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/favorite" className="nav-link">
                                Favorite
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </nav>
            
            {/* Bottom Tab Navbar */}
            <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav bg-light" role="navigation">
            <Nav className="w-100">
                <div className="d-flex flex-row justify-content-around w-100">
                    {
                    tabs.map((tab, index) =>(
                        <NavItem key={index}>
                            <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={tab.icon}/>
                                    <div className="bottom-tab-label">{tab.label}</div>
                                </div>
                            </NavLink>
                        </NavItem>
                    ))
                    }
                </div>
            </Nav>
        </nav>
        </div>
    )
}

export default Navigation;
