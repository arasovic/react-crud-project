import React from 'react'
import {Segment} from 'semantic-ui-react'
import Logo from './semantic/Logo'
import LoginForm from './semantic/LoginForm'


const LoginPage = () => {
    return (
        <div className='ortala'>
            <div className="animated fadeIn">
                <div className='golge'>
                    <Segment color="green" size='massive' padded id="golge">
                        <div style={{textAlign: 'center'}}>Login Page</div>
                        <br/>
                        <Logo/>
                        <LoginForm/>
                    </Segment>
                </div>
            </div>
        </div>
    )
}

export default LoginPage