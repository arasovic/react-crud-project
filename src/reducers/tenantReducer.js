import _ from 'lodash'
import {
    FETCH_TENANTS,
    FETCH_TENANT,
    EDIT_TENANT,
    DELETE_TENANT,
    ADD_TENANT,
    DELETE_TENANTS,
    CLEAR_REDUX_STORE
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TENANT:
            return {...state, [action.payload._id]: action.payload};
        case FETCH_TENANTS:
            return {...state, ..._.mapKeys(action.payload, '_id')};
        case ADD_TENANT:
            return {...state, [action.payload._id]: action.payload};
        case EDIT_TENANT:
            return {...state, [action.payload._id]: action.payload};
        case DELETE_TENANT:
            return _.omit(state, action.payload);
        case DELETE_TENANTS:
            return {};
        case CLEAR_REDUX_STORE:
            return {};
        default:
            return state;
    }

}