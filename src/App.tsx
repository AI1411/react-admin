import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './secure/components/Nav';
import Menu from './secure/components/Menu';
import Dashboard from './secure/dashboard/Dashboard';
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./secure/users/Users";
import Login from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from "./secure/RedirectToDashboard";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path={'/'} exact component={RedirectToDashboard}/>
                <Route path={'/dashboard'} exact component={Dashboard}/>
                <Route path={'/users'} component={Users}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
