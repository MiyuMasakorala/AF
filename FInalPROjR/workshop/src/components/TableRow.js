import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.approve = this.approve.bind(this);
		this.decline = this.decline.bind(this);
		this.download = this.download.bind(this)
    }
    approve(){

        axios.get('http://localhost:4000/workshop/approve/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
    }
	decline(){

        axios.get('http://localhost:4000/workshop/decline/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
    }
	download(){
		console.log(this.props.obj.filename);
        axios.get('http://localhost:4000/workshop/file-download/'+this.props.obj.filename)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.first_name}
                </td>
                <td>
                    {this.props.obj.last_name}
                </td>
                <td>
                    {this.props.obj.phone}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.role}
                </td>
                <td>
                    {this.props.obj.status}
                </td>
				<td>
                    <td><button onClick={this.download} className="btn btn-danger">View</button></td>

                </td>
                <td>
                    <td><button onClick={this.approve} className="btn btn-danger">Approve</button></td>

                </td>
                <td>
                    <td><button onClick={this.decline} className="btn btn-danger">Decline</button></td>

                </td>
            </tr>
        );
    }
}

export default TableRow;