import React, {Component} from 'react';
import MyModal from "../semantic/MyModal";
import {Link} from "react-router-dom";
import {history} from "../../utils/history";
import {connect} from "react-redux";
import {deleteTenantAdmins} from "../../actions";

class DeleteAllTenantAdmins extends Component {

    renderActions() {
        return (
            <>
                <button onClick={() => this.props.deleteTenantAdmins().then(history.push('/tadmins'))}
                        className="ui button negative">Sil
                </button>
                <Link to='/tAdmins' className="ui button">İptal</Link>
            </>);
    }

    renderContent() {
        return (
            'Bütün Tenant Adminleri Silmek İstiyor musunuz?'
        )
    }

    render() {
        return (
            <div>
                <MyModal
                    title='Tenant Adminleri sil'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/tAdmins')}
                />
            </div>
        );
    }
}

export default connect(null, {deleteTenantAdmins})(DeleteAllTenantAdmins);