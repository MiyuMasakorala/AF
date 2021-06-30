import  React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";


export default  class Create extends  Component{

    
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:''
        }
    }
    
    onChangeEmail(e){

        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            email : this.state.email,
            password : this.state.password
        };

        axios.post('http://localhost:4000/workshop/login', obj)
                .then(res => {
						this.props.history.push('/EmpView');
                });
            
        

        this.setState({
            email:'',
            password:''

        })

    }

    render() {
        return(
            <div className='container'>
                <Router>
                    <div className="container " style={{marginTop:10}}>
                        <h3 className="text-center">Employee Registration Form</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Email Address :</label>
                                <input type ="text" required = "Please enter address" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password :</label>
                                <input type ="text" required = "Please enter address" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                            </div>
                            
                            <br/>
                            <div className="form-group">
                                <input type = "submit" value = "Login" className="btn-primary"/>
                            </div>
                        </form>
                    </div>
                </Router>
            </div>
        )
    }
}


