import React from 'react'
import {connect} from "react-redux";
import {addTenant} from "../../actions";
import FormTenant from './FormTenant'


class addingTenant extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (formValues) => {
        this.props.addTenant(formValues);
    };

    render() {
        return (
            <div>
                <FormTenant onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, {addTenant})(addingTenant);
