import React from 'react';
import MyModal from "../semantic/MyModal";
import {history} from '../../utils/history'
import {connect} from "react-redux";
import {deleteTenantAdmin, fetchTenantAdmins} from "../../actions";
import MyPlaceholder from "../semantic/MyPlaceholder";
import {Link} from "react-router-dom";


class DeletingTenantAdmin extends React.Component {
    componentDidMount() {
        this.props.fetchTenantAdmins(this.props.match.params.id)
    }

    renderActions() {
        const {id} = this.props.match.params;
        return (
            <>
                <button onClick={() => this.props.deleteTenantAdmin(id).then(this.props.history.push('/tAdmins'))}
                        className="ui button negative">Sil
                </button>
                <Link to='/tAdmins' className="ui button">İptal</Link>
            </>);
    }

    renderContent() {
        if (!this.props.tenantAdmin) {
            return "Tenant Admini gerçekten silmek istiyor musunuz?"
        }
        return (` ${this.props.tenantAdmin.tAdminName} isimli Tenant Admini gerçekten silmek istiyor musunuz?`)
    }

    render() {
        return (
            <div>
                <MyPlaceholder/>
                <MyModal
                    title="Tenant Sil"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/tAdmins')}
                />
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {tenantAdmin: state.tenantAdmin[ownProps.match.params.id]}
};


export default connect(mapStateToProps, {fetchTenantAdmins, deleteTenantAdmin})(DeletingTenantAdmin);
