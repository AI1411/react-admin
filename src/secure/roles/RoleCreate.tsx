import React, {Component, SyntheticEvent} from 'react';
import Wrapper from "../Wrapper";
import axios from "axios";
import {Permission} from '../../classes/permission';
import {Redirect} from "react-router-dom";

class RoleCreate extends Component {
    state = {
        permissions: [],
        redirect: false
    }
    selected: number[] = [];
    name = '';
    componentDidMount = async () => {
        const response = await axios.get('permissions');

        this.setState({
            permissions: response.data.data
        })
    }

    check = (id: number) => {
        if (this.selected.filter(s => s === id).length > 0) {
            this.selected = this.selected.filter(s => s === id);
            return;
        }
        this.selected.push(id);
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post('roles', {
            name: this.name,
            permissions: this.selected
        });
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/roles'} />
        }
        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-snm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="name" id="name"
                                   onChange={e => this.name = e.target.value}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-snm-2 col-form-label">Permissions</label>
                        <div className="col-sm-10">
                            {this.state.permissions.map((permission: Permission) => {
                                return (
                                    <div className="form-check form-check-inline col-3" key={permission.id}>
                                        <input type="checkbox" className="form-check-input" value={permission.id}
                                               onChange={e => this.check(permission.id)}
                                        />
                                        <label className="form-check-label">{permission.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <button className="btn btn-outline-secondary">登録</button>
                </form>
            </Wrapper>
        );
    }
}

export default RoleCreate;
