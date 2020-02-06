import React, {Component} from 'react';
import MyNavb from "./semantic/MyNavb";
import {Button, Header} from "semantic-ui-react";
import {connect} from "react-redux";
import {fetchTenants} from '../actions'
import {Link, withRouter} from "react-router-dom";
import Draggable from 'react-draggable'


class Tenants extends Component {

    componentDidMount() {
        this.props.fetchTenants();
        //console.log(this.props.tenant)
    }

    handleAddTenant = () => {
        this.props.history.push('/tenants/add')
    };
    handleDeleteAll = () => {
        this.props.history.push('/tenants/deleteAll')
    };

    renderTenants = () => {
        if (this.props.tenant.length === 0) {
            return (<div> Tenant Bulunamadı </div>)
        } else {
            return (
                this.props.tenant.map(tenants => {
                    return (
                        <Draggable axis="both" key={tenants._id}>
                            <div className="card">
                                <div className="content">
                                    <div className="header">
                                        {tenants.tName}
                                    </div>
                                    <div className="meta">
                                        Status: {tenants.tStatus === true ? (
                                        <span style={{color: 'blue'}}>açık</span>) : (
                                        <span style={{color: 'red'}}>kapalı</span>)}
                                    </div>
                                    <div className="description">
                                        Admins
                                        {tenants.adminInfo.length === 0 ? (
                                            <div>Admin yok</div>) : (Object.values(tenants.adminInfo).map(((tName) => {
                                            return (<div>{tName}</div>)
                                        })))}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <div className="ui two buttons">
                                        <Link to={`/tenants/edit/${tenants._id}`}
                                              className="ui basic green button">Edit</Link>
                                        <Link to={`/tenants/delete/${tenants._id}`}
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
                        onClick={this.handleAddTenant}
                    />
                    <Header as='h3'>
                        All Tenants
                    </Header>
                    <br/>
                    <div className='animated fadeIn'>
                        <div className='ui cards'>
                            {this.renderTenants()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {tenant: Object.values(state.tenant)}
};


export default connect(mapStateToProps, {fetchTenants})(withRouter(Tenants));

