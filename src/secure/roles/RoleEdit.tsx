import React, {Component, SyntheticEvent} from 'react';
import Wrapper from "../Wrapper";
import axios from "axios";
import {Permission} from '../../classes/permission';
import {Redirect} from "react-router-dom";
import {Role} from "../../classes/role";

class RoleEdit extends Component<{match: any}> {
    state = {
        name: '',
        selected: [],
        permissions: [],
        redirect: false
    }
    selected: number[] = [];
    name = '';
    id = 0;
    componentDidMount = async () => {
        this.id = this.props.match.params.id;
        const permissionCall = await axios.get('permissions');
        const roleCall = await axios.get(`roles/${this.id}`);
        const role: Role = roleCall.data.data;
        this.selected = role.permissions.map((permission: Permission) => permission.id);

        this.setState({
            name: role.name,
            selected: this.selected,
            permissions: permissionCall.data.data
        })
    }

    check = (id: number) => {
        if (this.isChecked(id)) {
            this.selected = this.selected.filter(s => s === id);
            return;
        }
        this.selected.push(id);
    }

    isChecked = (id:number) => {
        return this.state.selected.filter(s => s === id).length > 0;
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.put(`roles/${this.id}`, {
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
                                   defaultValue={this.name = this.state.name}
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
                                        <input type="checkbox" className="form-check-input"
                                               value={permission.id}
                                               defaultChecked={this.isChecked(permission.id)}
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

export default RoleEdit;
