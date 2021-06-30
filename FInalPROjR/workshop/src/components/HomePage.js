import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Image, Nav, Navbar, Row} from "react-bootstrap";


import  empadd from './AddWorkshop'
import  login from './LoginWorkshop'
import empview from './ViewEmployeePage'
import conview from './ViewConferencePage'



class HomePage extends Component{


    render() {
        return(
            <div>
                <Router>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand to={'/'}>Workshop Conductor</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link to={'/'} className = "nav-link">Home</Link>
                            <Link to={'/EmpAdd'} className = "nav-link">Register workshop conductor</Link>
                            <Link to={'/EmpView'} className = "nav-link">View workshop conductor</Link>
							<Link to={'/Login'} className = "nav-link">Login workshop conductor</Link>

                        </Nav>
                    </Navbar>
                    <br />
                    <Switch>
                        <Route exact path='/'/>
                        <Route   path='/EmpAdd' component={empadd}/>
                        <Route   path='/EmpView' component={empview}/>
                        <Route   path='/ConView' component={conview}/>
						<Route   path='/Login' component={login}/>
                    </Switch>
                </Router>

                <hr/>
                <h4 className="text-center">Welcome To Be a Workshop conductor</h4>
            </div>
        );
    }
}

export default HomePage;

