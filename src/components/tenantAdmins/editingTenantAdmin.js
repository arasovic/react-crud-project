import React, {Component} from 'react';
import {editTenantAdmin, fetchTenantAdmin} from "../../actions";
import {connect} from "react-redux";
import FormTenantAdmins from "./FormTenantAdmins";
import {history} from "../../utils/history";
import _ from 'lodash'

class EditingTenantAdmin extends Component {
    componentDidMount() {
        this.props.fetchTenantAdmin(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editTenantAdmin(this.props.match.params.id, formValues)
    };

    render() {
        if (!this.props.tenantAdmin) return (
            <>
                {history.push('/xx')}
            </>
        );
        return (
            <div>
                <FormTenantAdmins
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.tenantAdmin, 'tAdminName', 'tenantInfo')}
                />

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {tenantAdmin: state.tenantAdmin[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {editTenantAdmin, fetchTenantAdmin})(EditingTenantAdmin);