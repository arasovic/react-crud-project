import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

export default function (ComposedComponent) {

    class Authendicate extends Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.history.push('/login')
            }
            if ((this.props.isAuthenticated) && (this.props.history.location.pathname === '/login')) {
                this.props.history.push('/dashboard')
            }
        }

        render() {
            return (
                <ComposedComponent{...this.props}/>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps)(withRouter(Authendicate))
}