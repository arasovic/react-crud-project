import React from 'react';
import {Button, Form, Icon, Divider, Header, Modal} from 'semantic-ui-react';
import {Field, reduxForm, reset} from "redux-form";
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {loginUser} from '../../actions'
import authReducer from "../../reducers/authReducer";


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {errorModal: false};
        //this.state = {loggedIn: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal = () => this.setState({errorModal: false});


    handleUserError({error, touched, visited}) {
        if (error && touched && visited) {
            return (<div className="ui icon message red">
                <i className="exclamation icon"></i>
                <div className="content">
                    <div className="header">
                        Hata
                    </div>
                    <p>{error}</p>
                </div>
            </div>)
        }

    }

    handlePassError({error, touched, visited}) {
        if (error && touched && visited) {
            return (<div className="ui icon message red">
                <i className="exclamation icon"></i>
                <div className="content">
                    <div className="header">
                        Hata
                    </div>
                    <p>{error}</p>
                </div>
            </div>)
        }

    }

    handleUsername = ({input, meta}) => {
        //console.log(meta);
        return (
            <div>
                <Form.Input icon='users' iconPosition='left' placeholder='Kullanıcı Adı' type='input' {...input}
                            autoComplete='off'/>
                {this.handleUserError(meta)}
            </div>)
    };

    handlePassword = ({input, meta}) => {
        // console.log(meta)
        return (
            <div>
                <Form.Input icon='key' iconPosition='left' placeholder='Şifre' type='password' {...input}
                            autoComplete='off'/>
                {this.handlePassError(meta)}
            </div>)
    };

    handleSubmit = async (formValues, dispatch) => {
        // console.log(JSON.stringify(formValues));
        const result = await this.props.loginUser(formValues);
        console.log(result);
        if (result.status === 200) {
            this.props.history.push("/dashboard");
        } else {
            this.setState({errorModal: true});
            console.log(result)
        }
        dispatch(reset('LoginForm')) // form temizlemek
    };


    render() {
        return (<>
                <Form error onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <Divider/>
                    <Field name='username' component={this.handleUsername}/>
                    <br/>
                    <Field name='password' component={this.handlePassword}/>
                    <Divider/>
                    <Button type="submit" animated color="teal" fluid>
                        <Button.Content visible>Giriş</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow alternate circle right'/>
                        </Button.Content>
                    </Button>
                    <Divider/>
                </Form>


                <Modal open={this.state.errorModal} onClose={this.handleCloseModal} closeIcon size='small'>
                    <Header icon='archive' content='Hata'/>
                    <Modal.Content>
                        <p style={{textAlign: 'center'}}>Giriş Yapılamadı</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' inverted circular onClick={this.handleCloseModal}>
                            <Icon name='checkmark'/> OK
                        </Button>
                    </Modal.Actions>
                </Modal>
            </>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.username) {
        errors.username = 'Kullanıcı adı boş olmamalı';
    }

    if (!formValues.password) {
        errors.password = 'Şifre boş olamaz';
    }
    return errors;
};

const formWrap = (reduxForm({
    form: 'LoginForm',
    auth: authReducer,
    validate
})(withRouter((LoginForm))));

export default connect(null, {loginUser})(formWrap);