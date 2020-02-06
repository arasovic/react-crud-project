import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'
import tenantReducer from './tenantReducer'
import tenantAdminReducer from './tenantAdminReducer'

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    tenant: tenantReducer,
    tenantAdmin: tenantAdminReducer
})