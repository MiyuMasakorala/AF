import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Image, Nav, Navbar, Row} from "react-bootstrap";


import  empadd from './AddResearcherPage'
import empview from './ViewResearcherPage'




class HomePage extends Component{


    render() {
        return(
            <div>
                <Router>
                    <Navbar bg="secondary" text="dark" d="inline">
                        <Navbar.Brand to={'/'}>Researcher Page</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link to={'/'} className = "nav-link">Home</Link>
                            <Link to={'/Empadd'} className = "nav-link">New Researcher</Link>
                            <Link to={'/EmpView'} className = "nav-link">View Researcher Profile      </Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                    </Navbar>
                    <br />
                    <Switch>
                        <Route exact path='/'/>
                        <Route   path='/Empadd' component={empadd}/>
                        <Route   path='/EmpView' component={empview}/>
                    </Switch>
                </Router>

                <hr/>
                <h4 className="text-center">Conference Application</h4>
            </div>
        );
    }
}

export default HomePage;

