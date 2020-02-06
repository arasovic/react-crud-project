import React from 'react'
import {Switch, Route, Router, Redirect} from 'react-router-dom'
import {history} from '../utils/history'

import LoginPage from './LoginPage'
import DashContent from './DashContent'
import Tenants from "./Tenants";
import Users from "./Users";
import Roles from "./Roles";
import Authority from "./Authority";
import ErrorPage from './semantic/ErrorPage'

import requireAuth from '../utils/requireAuth'
import addingTenant from "./tenants/addingTenant";
import editingTenant from "./tenants/editingTenant";
import deletingTenant from "./tenants/deletingTenant";
import TenantAdmins from "./TenantAdmins";
import deleteAllTenants from './tenants/deleteAllTenants'
import addingTenantAdmin from "./tenantAdmins/addingTenantAdmin";
import editingTenantAdmin from "./tenantAdmins/editingTenantAdmin";
import deletingTenantAdmin from "./tenantAdmins/deletingTenantAdmin";
import deletingAllTenantAdmins from "./tenantAdmins/deletingAllTenantAdmins";



class MyRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact strict path="/login" component={requireAuth(LoginPage)}/>
                    <Route exact strict path="/dashboard" component={requireAuth(DashContent)}/>
                    <Route exact strict path="/tenants" component={requireAuth(Tenants)}/>
                    <Route exact strict path="/users" component={requireAuth(Users)}/>
                    <Route exact strict path="/roles" component={requireAuth(Roles)}/>
                    <Route exact strict path="/authority" component={requireAuth(Authority)}/>
                    <Route exact strict path="/tAdmins" component={requireAuth(TenantAdmins)}/>

                    <Route exact strict path="/tenants/add" component={requireAuth(addingTenant)}/>
                    <Route exact strict path="/tenants/edit/:id" component={requireAuth(editingTenant)}/>
                    <Route exact strict path="/tenants/delete/:id" component={requireAuth(deletingTenant)}/>
                    <Route exact strict path="/tenants/deleteAll" component={requireAuth(deleteAllTenants)}/>

                    <Route exact strict path="/tAdmins/add" component={requireAuth(addingTenantAdmin)}/>
                    <Route exact strict path="/tAdmins/edit/:id" component={requireAuth(editingTenantAdmin)}/>
                    <Route exact strict path="/tAdmins/delete/:id" component={requireAuth(deletingTenantAdmin)}/>
                    <Route exact strict path="/tAdmins/deleteAll" component={requireAuth(deletingAllTenantAdmins)}/>
                    <Redirect exact from="/" to="/login"/>
                    <Route path='/*' component={ErrorPage}/>
                </Switch>
            </Router>
        )
    }
}

export default MyRouter