import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import empedit from './EditResearcher'


class ViewResearcherPage extends Component{


    constructor(props) {
        super(props);
        this.state = {researcher : []};
    }

    componentDidMount() {

        axios.get('http://localhost:8086/researcher/')
            .then(response => {
                this.setState({researcher : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.researcher.map(function (object, i){
            return <TableRow obj = {object} key = {i}/>;
        });
    }
    render() {
        return(
            <div>
                <h1 className="text-center" >Welcome to Researcher Page</h1>
                <hr/>
                <Router>
                    <table className="table table-striped" style = {{marginTop :20}}>
                        <thead>
                        <tr>
                            <th> Name</th>
                            <th>Contact Number</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Confirm Password</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
               <Switch>
                    <Route path='/empedit/:id' component={empedit}/>
                </Switch>
                </Router>
            </div>
        );
    }
}

export default ViewResearcherPage;
