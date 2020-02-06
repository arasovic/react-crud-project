import _ from 'lodash'
import {
    FETCH_TADMINS,
    FETCH_TADMIN,
    EDIT_TADMIN,
    DELETE_TADMIN,
    ADD_TADMIN,
    DELETE_TADMINS,
    CLEAR_REDUX_STORE
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TADMIN:
            return {...state, [action.payload._id]: action.payload};
        case FETCH_TADMINS:
            return {...state, ..._.mapKeys(action.payload, '_id')};
        case ADD_TADMIN:
            return {...state, [action.payload._id]: action.payload};
        case EDIT_TADMIN:
            return {...state, [action.payload._id]: action.payload};
        case DELETE_TADMIN:
            return _.omit(state, action.payload);
        case DELETE_TADMINS:
            return {};
        case CLEAR_REDUX_STORE:
            return {};
        default:
            return state;
    }

}