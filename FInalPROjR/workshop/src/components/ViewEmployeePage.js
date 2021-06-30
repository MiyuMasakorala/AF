import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import empedit from './EditWorkshop'


class ViewEmployeePage extends Component{


    constructor(props) {
        super(props);
        this.state = {workshop : []};
    }

    componentDidMount() {

        axios.get('http://localhost:4000/workshop/')
            .then(response => {
                this.setState({workshop : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.workshop.map(function (object, i){
            return <TableRow obj = {object} key = {i}/>;
        });
    }
    render() {
        return(
            <div>
                <h1 className="text-center">Welcome</h1>
                <hr/>
                <Router>
                    <table className="table table-striped" style = {{marginTop :20}}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>E-mail</th>
                            <th>Password</th>
                            <th>CPassword</th>
                            <th colSpan="2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
               <Switch>
                    <Route path='/EmpEdit/:id' component={empedit}/>
                </Switch>
                </Router>
            </div>
        );
    }
}

export default ViewEmployeePage;
