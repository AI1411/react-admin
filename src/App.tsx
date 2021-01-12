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
import RoleCreate from "./secure/roles/RoleCreate";
import RoleEdit from "./secure/roles/RoleEdit";
import Products from "./secure/products/Products";
import ProductCreate from './secure/products/ProductCreate';
import ProductEdit from "./secure/products/ProductEdit";
import Orders from './secure/orders/Orders';
import OrderItems from './secure/orders/OrderItems';


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
                <Route path={'/roles/create'} exact component={RoleCreate}/>
                <Route path={'/roles/:id/edit'} exact component={RoleEdit}/>
                <Route path={'/products'} exact component={Products}/>
                <Route path={'/products/create'} exact component={ProductCreate}/>
                <Route path={'/products/:id/edit'} exact component={ProductEdit}/>
                <Route path={'/orders'} exact component={Orders}/>
                <Route path={'/orders/:id'} component={OrderItems} exact/>
            </BrowserRouter>
        </div>
    );
}

export default App;
