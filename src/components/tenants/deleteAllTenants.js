import React, {Component} from 'react';
import MyModal from "../semantic/MyModal";
import {Link} from "react-router-dom";
import {history} from "../../utils/history";
import {connect} from "react-redux";
import {deleteTenants} from "../../actions";

class DeleteAllTenants extends Component {

    renderActions() {
        return (
            <>
                <button onClick={() => this.props.deleteTenants().then(history.push('/tenants'))}
                        className="ui button negative">Sil
                </button>
                <Link to='/tenants' className="ui button">İptal</Link>
            </>);
    }

    renderContent() {
        return (
            'Bütün Tenantları Silmek İstiyor musunuz?'
        )
    }

    render() {
        return (
            <div>
                <MyModal
                    title='Tenantları sil'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/tenants')}
                />
            </div>
        );
    }
}

export default connect(null, {deleteTenants})(DeleteAllTenants);