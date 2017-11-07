import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function workflowSearchFilterReducer(state = initialState.filter, action) {
    switch(action.type) {
        case types.SEARCH_WORKFLOWS:
            return Object.assign({}, state, action.filter);
        default:
            return state;
    }
}