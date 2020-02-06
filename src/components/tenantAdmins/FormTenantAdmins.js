import React, {Component} from 'react';
import {Button, Dropdown, Form, Header, Image, Modal} from "semantic-ui-react";
import {Field, reduxForm, reset} from "redux-form";
import {withRouter} from "react-router-dom";
import MyPlaceholder from "../semantic/MyPlaceholder";
import {fetchTenants} from '../../actions'
import {connect} from "react-redux";
import _ from 'lodash'

class FormTenantAdmins extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = async (formValues, dispatch) => {
        console.log(formValues);
        try {
            await this.props.onSubmit(formValues);
        } catch (e) {
            console.log(e)
        }
        this.props.history.push('/tAdmins');
        dispatch(reset('FormTenantAdmins'));
    };

    componentDidMount() {
        this.props.fetchTenants()
    }

    handletAdminName({input}) {
        return (
            <div>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Tenant Admin Name' {...input} autoComplete='off'/>
                </Form.Field>
            </div>
        )
    }

    handletName = (props) => {
        const {input} = props;
        return (<div>
                <Form.Field>
                    <label>Tenant</label>
                    <Dropdown
                        {...input}
                        options={
                            _.map(this.props.tenant, tenant => ({
                                key: tenant._id,
                                text: tenant.tName,
                                value: tenant.tName
                            }))}
                        placeholder='Choose Tenant'
                        button
                        clearable
                        selection
                        multiple
                        value={[...input.value]}
                        onChange={(param, data) => input.onChange(data.value)}
                    />
                </Form.Field>
            </div>
        )
    };
    handleClose = () => {
        this.props.history.push('/tAdmins');
    };

    render() {
        return (
            <div>
                <div style={{marginTop: '20px'}}>
                    <MyPlaceholder/>
                </div>
                <Modal open={true} onClose={this.handleClose} dimmer="blurring" size="small"
                       closeIcon>
                    <Modal.Header>Tenant Admin Information</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='small'
                               src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
                        <Modal.Description>
                            <Header as="h3">Enter values</Header>
                            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <Form.Group inline>
                                    <Field name='tAdminName' component={this.handletAdminName}/>
                                    <Field name='tenantInfo' component={this.handletName}/>
                                </Form.Group>
                                <Button type="submit" circular color="teal" floated='right' size='large'>Apply</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {tenant: Object.values(state.tenant)}
};

const formWrap = reduxForm({
    form: 'FormTenantAdmins'
})(withRouter(FormTenantAdmins));

export default connect(mapStateToProps, {fetchTenants})(formWrap);