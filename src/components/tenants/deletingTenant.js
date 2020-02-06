import React from 'react';
import MyModal from "../semantic/MyModal";
import {history} from '../../utils/history'
import {connect} from "react-redux";
import {deleteTenant, fetchTenants} from "../../actions";
import MyPlaceholder from "../semantic/MyPlaceholder";
import {Link} from "react-router-dom";


class DeletingTenant extends React.Component {
    componentDidMount() {
        this.props.fetchTenants(this.props.match.params.id)
    }

    renderActions() {
        const {id} = this.props.match.params;
        return (
            <>
                <button onClick={() => this.props.deleteTenant(id).then(this.props.history.push('/tenants'))}
                        className="ui button negative">Sil
                </button>
                <Link to='/tenants' className="ui button">İptal</Link>
            </>);
    }

    renderContent() {
        if (!this.props.tenant) {
            return "Tenantı gerçekten silmek istiyor musunuz?"
        }
        return (` ${this.props.tenant.tName} isimli Tenant'ı gerçekten silmek istiyor musunuz?`)
    }

    render() {
        return (
            <div>
                <MyPlaceholder/>
                <MyModal
                    title="Tenant Sil"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/tenants')}
                />
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {tenant: state.tenant[ownProps.match.params.id]}
};


export default connect(mapStateToProps, {fetchTenants, deleteTenant})(DeletingTenant);
