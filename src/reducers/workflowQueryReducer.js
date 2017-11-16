import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function workflowQueryReducer(state = initialState.workflowQuery, action) {
    switch(action.type) {
        case types.SEARCH_WORKFLOWS:
            return Object.assign({}, state, action.workflowQuery);
        default:
            return state;
    }
}