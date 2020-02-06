import React from 'react'
import {Button, Dropdown, Form, Header, Image, Modal} from "semantic-ui-react";
import {Field, reduxForm, reset} from "redux-form";
import {withRouter} from "react-router-dom";
import {fetchTenantAdmins} from "../../actions"
import MyPlaceholder from "../semantic/MyPlaceholder";
import {connect} from "react-redux";
import _ from 'lodash'

class FormTenant extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    onSubmit = async (formValues, dispatch) => {
        try {
            await this.props.onSubmit(formValues);
        } catch (e) {
            console.log(e)
        }
        this.props.history.push('/tenants');
        dispatch(reset('formTenant'));
    };

    componentDidMount() {
        this.props.fetchTenantAdmins();
        console.log(this.props.tenantAdmin)
    }

    handletName({input}) {
        return (
            <div>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Tenant Name' {...input} autoComplete='off'/>
                </Form.Field>
            </div>
        )
    }

    handletStatus({input}) {
        const options = [
            {key: 'e', text: 'Enabled', value: true},
            {key: 'd', text: 'Disabled', value: false}
        ];
        return (<div>
                <Form.Field>
                    <label>State</label>
                    <Dropdown
                        {...input}
                        options={options}
                        placeholder='Tenant Status'
                        button
                        selection
                        value={input.value}
                        onChange={(param, data) => input.onChange(data.value)}
                    />
                </Form.Field>
            </div>
        )
    };

    handletAdmin = (props) => {
        const {input} = props;
        return (<div>
                <Form.Field>
                    <label>T. Admin</label>
                    <Dropdown
                        {...input}
                        options={_.map(this.props.tenantAdmin, tenantAdmin => ({
                            key: tenantAdmin._id,
                            text: tenantAdmin.tAdminName,
                            value: tenantAdmin.tAdminName
                        }))}
                        placeholder='Tenant Admin'
                        button
                        clearable
                        multiple
                        selection
                        value={[...input.value]}
                        onChange={(param, data) => input.onChange(data.value)}
                    />
                </Form.Field>
            </div>
        )
    };

    handleClose = () => {
        this.props.history.push('/tenants');
    };


    render() {
        return (
            <div>
                <div style={{marginTop: '20px'}}>
                    <MyPlaceholder/>
                </div>
                <Modal open={true} onClose={this.handleClose} dimmer="blurring" size="large"
                       closeIcon>
                    <Modal.Header>Tenant Information</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='small'
                               src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
                        <Modal.Description>
                            <Header as="h3">Tenant Information</Header>
                            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <Form.Group inline>
                                    <Field name='tName' component={this.handletName}/>
                                    <Field name='tStatus' component={this.handletStatus}/>
                                    <Field name='adminInfo' component={this.handletAdmin}/>
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
    return {tenantAdmin: Object.values(state.tenantAdmin)}
};

const formWrap = reduxForm({
    form: 'FormTenant'
})(withRouter(FormTenant));

export default connect(mapStateToProps, {fetchTenantAdmins})(formWrap);

