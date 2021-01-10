import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './secure/Nav';
import Menu from './secure/Menu';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./components/Users";


function App() {
    return (
        <div className="App">
            <Nav/>
            <div className="container-fluid">
                <div className="row">
                    <Menu/>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <BrowserRouter>
                            <Route path={'/'} exact component={Dashboard} />
                            <Route path={'/users'} component={Users} />
                        </BrowserRouter>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
