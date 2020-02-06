import React, {Component} from 'react'
import {Menu, Dropdown, Image} from 'semantic-ui-react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from '../../actions'
import axios from 'axios'

class MyNavb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeName: '',
            username: '...',
            tokenTime: ''
        };
        this.handleRedirectDash = this.handleRedirectDash.bind(this);
        this.handleItemA = this.handleItemA.bind(this);
        this.handleItemR = this.handleItemR.bind(this);
        this.handleItemT = this.handleItemT.bind(this);
        this.handleItemU = this.handleItemU.bind(this);
        this.handleItemTA = this.handleItemTA.bind(this);
        //console.log(this.props)
    }

    handleItemTA = (e, {name}) => {
        (this.setState({activeItem: name}));
        return this.props.history.push('/tAdmins')
    };
    handleItemT = (e, {name}) => {
        (this.setState({activeItem: name}));
        return this.props.history.push('/tenants')
    };
    handleItemU = (e, {name}) => {
        (this.setState({activeItem: name}));
        return this.props.history.push('/users')
    };
    handleItemR = (e, {name}) => {
        (this.setState({activeItem: name}));
        return this.props.history.push('/roles')
    };
    handleItemA = (e, {name}) => {
        (this.setState({activeItem: name}));
        return this.props.history.push('/authority')
    };
    handleRedirectDash = () => {
        return this.props.history.push('/dashboard')
    };

    async componentDidMount() {
        try {
            const response = await axios.get('api/users/me');
            //console.log(response);
            if (this.state.username !== response.data.username) {
                this.setState({username: response.data.username})
            }
        } catch (err) {
            if (err.response.status === 401) {
                this.props.logout();
            }
            console.log(err.message)
        }
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/login');
    }

    render() {
        const {activeItem} = this.state;
        // console.log(this.state.value);
        return (
            <div>
                <Menu stackable inverted color='teal'>
                    <Menu.Item
                        onClick={this.handleRedirectDash}
                    >
                        <Image src="http://www.netas.com.tr/media/13945/netas.png" size="tiny"/>
                    </Menu.Item>
                    <Menu.Item
                        name='Tenants'
                        onClick={this.handleItemT}
                        active={activeItem === 'Tenants'}
                    >
                    </Menu.Item>
                    <Menu.Item
                        name='Tenant Admins'
                        onClick={this.handleItemTA}
                        active={activeItem === 'TenantAdmins'}
                    >
                    </Menu.Item>
                    <Menu.Item
                        name='Users'
                        active={activeItem === 'Users'}
                        onClick={this.handleItemU}
                    >
                    </Menu.Item>
                    <Menu.Item
                        name='Roles'
                        active={activeItem === 'Roles'}
                        onClick={this.handleItemR}
                    >
                    </Menu.Item>
                    <Menu.Item
                        name='Authority'
                        active={activeItem === 'Authority'}
                        onClick={this.handleItemA}
                    >
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Dropdown text={this.state.username} selection>
                            <Dropdown.Menu direction='left'>
                                <Dropdown.Divider/>
                                <Dropdown.Item icon='sign-out alternate' text='Çıkış' onClick={this.logout.bind(this)}/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
                {/*<MyModal open={this.state.modalOpen} onClose={this.handleClose}/>*/}
            </div>
        )
    }
}

export default connect(null, {logout})(withRouter(MyNavb))