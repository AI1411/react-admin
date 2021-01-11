import React from 'react';
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./secure/users/Users";
import Login from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from "./secure/RedirectToDashboard";
import UserCreate from './secure/users/UserCreate';
import UserEdit from './secure/users/UserEdit';
import Roles from "./secure/roles/Roles";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path={'/'} exact component={RedirectToDashboard}/>
                <Route path={'/dashboard'} exact component={Dashboard}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/users'} component={Users} exact/>
                <Route path={'/users/create'} component={UserCreate}/>
                <Route path={'/users/:id/edit'} component={UserEdit}/>
                <Route path={'/roles'} exact component={Roles}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
