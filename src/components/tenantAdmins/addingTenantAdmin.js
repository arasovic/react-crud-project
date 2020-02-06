import React, {Component} from 'react';
import FormTenantAdmins from "./FormTenantAdmins";
import {addTenantAdmin} from "../../actions"
import {connect} from "react-redux";

class AddingTenantAdmin extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (formValues) => {
        this.props.addTenantAdmin(formValues)
    };

    render() {
        return (
            <div>
                <FormTenantAdmins onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, {addTenantAdmin})(AddingTenantAdmin);