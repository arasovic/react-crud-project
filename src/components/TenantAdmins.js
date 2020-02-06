import React, {Component} from 'react';
import MyNavb from "./semantic/MyNavb";
import {Button, Header} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {fetchTenantAdmins, fetchTenants} from "../actions";
import Draggable from "react-draggable";

class TenantAdmins extends Component {

    componentDidMount() {
        this.props.fetchTenantAdmins();
    }

    handleAddtAdmin = () => {
        this.props.history.push('/tadmins/add')
    };
    handleDeleteAll = () => {
        this.props.history.push('/tadmins/deleteAll')
    };
    renderTAdmins = () => {
        if (this.props.tenantAdmin.length === 0) {
            return (<div> Tenant Admin Bulunamadı </div>)
        } else {
            return (
                this.props.tenantAdmin.map(tenants => {
                    return (
                        <Draggable axis="both" key={tenants._id}>
                            <div className="card">
                                <div className="content">
                                    <div className="header">
                                        {tenants.tAdminName}
                                    </div>
                                    <div className="meta">
                                    </div>
                                    <div className="description">
                                        Tenants
                                        {tenants.tenantInfo.length === 0 ? (
                                            <div>Tenant
                                                yok</div>) : (Object.values(tenants.tenantInfo).map(((tName) => {
                                            return (<div>{tName}</div>)
                                        })))}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <div className="ui two buttons">
                                        <Link to={`/tAdmins/edit/${tenants._id}`}
                                              className="ui basic green button">Edit</Link>
                                        <Link to={`/tAdmins/delete/${tenants._id}`}
                                              className="ui basic red button">Remove</Link>
                                    </div>
                                </div>
                            </div>
                        </Draggable>
                    )
                })
            )
        }
    };

    render() {
        //console.log(this.props);
        return (
            <div>
                <MyNavb/>
                <div style={{margin: '10px 20px'}}>
                    <Button
                        size='large'
                        inverted
                        circular
                        color='red'
                        floated='right'
                        content='Delete All'
                        onClick={this.handleDeleteAll}
                    />
                    <Button
                        size='large'
                        inverted
                        circular
                        color='green'
                        floated='right'
                        content='Add'
                        onClick={this.handleAddtAdmin}
                    />
                    <Header as='h3'>
                        All Tenant Admins
                    </Header>
                    <br/>
                    <div className='animated fadeIn'>
                        <div className='ui cards'>
                            {this.renderTAdmins()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tenantAdmin: Object.values(state.tenantAdmin)

    }
};

export default connect(mapStateToProps, {fetchTenantAdmins, fetchTenants})(withRouter(TenantAdmins));