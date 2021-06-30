import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class ConferenceTableRow extends Component {
    constructor(props) {
        super(props);
        this.approve = this.approve.bind(this);
        this.reject = this.reject.bind(this);
    }
    approve(){
        axios.post('http://localhost:4000/admin/approve/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
    }
    reject(){
        axios.post('http://localhost:4000/admin/reject/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.onf_date}
                </td>
                <td>
                    {this.props.obj.conf_impdate}
                </td>
                <td>
                    {this.props.obj.conf_title}
                </td>
                <td>
                    {this.props.obj.conf_link}
                </td>
                <td>
                    {this.props.obj.conf_para1}
                </td>
                <td>
                    {this.props.obj.conf_para2}
                </td>
                <td>
                    {this.props.obj.conf_status}
                </td>
                <td>
                    <td><button onClick={this.approve} className="btn btn-primary">Approve</button></td>
                </td>
                <td>
                    <td><button onClick={this.reject} className="btn btn-danger">Reject</button></td>
                </td>
            </tr>
        );
    }
}
export default ConferenceTableRow;