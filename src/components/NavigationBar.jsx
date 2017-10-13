import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class NavigationBar extends Component{
    render(){
        let Navbar = ReactBootstrap.Navbar;
        let Nav = ReactBootstrap.Nav;
        let NavItem = ReactBootstrap.NavItem;
        let NavDropdown = ReactBootstrap.NavDropdown;
        let MenuItem = ReactBootstrap.MenuItem;
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {/*<a href="#">React Home</a>*/}
                            <Link to="/">React Home</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavItem eventKey={3} href="#">Link</NavItem>
                            <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={4.1}>Action</MenuItem>
                                <MenuItem eventKey={4.2}>Another action</MenuItem>
                                <MenuItem eventKey={4.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={4.3}>
                                    <Link to="/test">Separated Link</Link>
                                </MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1}>
                                <Link to="/about">About</Link>
                            </NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}