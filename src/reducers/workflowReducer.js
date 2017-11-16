import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function workflowReducer(state = initialState.workflowsList, action) {
    switch(action.type) {
        case types.LOAD_WORKFLOWS_SUCCESS:
            return action.workflowsList;
        case types.CREATE_WORKFLOW:
            return [...state, Object.assign({}, action.workflow)];
        default:
            return state;
    }
}