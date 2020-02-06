import React, {Component} from 'react';
import {Button, Header, Icon, Segment} from "semantic-ui-react";
import {withRouter} from "react-router-dom";

const errorContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    padding: '250px 0',
};


class ErrorPage extends Component {
    handleRedirect = () => {
        this.props.history.push('/login')
    };

    render() {
        return (
            <div style={errorContentStyle}>
                <Segment textAlign='center' padded='very' secondary color='red'>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='wrench' circular/>
                        <Header.Content>Sayfa Bulunamadı</Header.Content>
                        <br/>
                        <Button inverted color='red' size='big' onClick={this.handleRedirect.bind(this)}>
                            Anasayfa
                        </Button>
                    </Header>
                </Segment>
            </div>
        );
    }
}

export default withRouter(ErrorPage);