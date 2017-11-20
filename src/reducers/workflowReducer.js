import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { debug } from 'util';

export default function workflowReducer(state = initialState.activeWorkflow, action) {
    switch(action.type) {
        case types.LOAD_WORKFLOW_SUCCESS:
            return Object.assign({}, state, action.workflow);
        case types.CREATE_WORKFLOW_SUCCESS:
            return Object.assign({}, state, action.workflow);
        default:
            return state;
    }
}