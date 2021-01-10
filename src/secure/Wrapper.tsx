import React, {Component} from 'react';
import Nav from "./Nav";
import Menu from "./Menu";
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Users from "../components/Users";
import Login from "../public/Login";

class Wrapper extends Component {
    render() {
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
