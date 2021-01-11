import React, {Component} from 'react';
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import {Redirect} from "react-router-dom";
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
