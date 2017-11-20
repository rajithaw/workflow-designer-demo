import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { debug } from 'util';

export default function workflowListReducer(state = initialState.workflowList, action) {
    switch(action.type) {
        case types.LOAD_WORKFLOWS_SUCCESS:
            return Object.assign({}, state, action.workflowList);
        default:
            return state;
    }
}