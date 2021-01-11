import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Wrapper from "../Wrapper";
import axios from "axios";
import {Role} from "../../classes/role";

class Roles extends Component {
    state = {
        roles: []
    }
    componentDidMount = async () => {
        const response = await axios.get('roles');

        this.setState({
            roles: response.data.data
        })
    }
    delete = async (id: number) => {
        if (window.confirm('削除しますか？')) {
            await axios.delete(`roles/${id}`);

            this.setState({
                roles: this.state.roles.filter((r: Role) => r.id !== id)
            })
        }
    }

    render() {
        return (
            <Wrapper>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="btn-toolbar mb-2 mb-nd-0">
                        <Link to={'/roles/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.roles.map((role: Role) => {
                            return (
                                <tr key={role.id}>
                                    <td>{role.id}</td>
                                    <td>{role.name}</td>
                                    <td>
                                        <div className="btn-group mr-2">
                                            <Link to={`/users/${role.id}/edit`}  className="btn btn-sm btn-outline-secondary mr-1">Edit</Link>
                                            <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() =>this.delete(role.id)}>Delete</a>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </Wrapper>
        );
    }
}

export default Roles;
