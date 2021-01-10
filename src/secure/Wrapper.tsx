import React, {Component} from 'react';
import Nav from "./Nav";
import Menu from "./Menu";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Users from "../components/Users";
import Login from "../public/Login";
import axios from "axios";

class Wrapper extends Component {
    state = {
        redirect: false
    }
    componentDidMount = async () => {
        try {
            const response = await axios.get('user');
        } catch (e) {
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/login'} />
        }
        return (
            <>
                <Nav/>
                <div className="container-fluid">
                    <div className="row">
                        <Menu/>
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </>
        );
    }
}

export default Wrapper;
