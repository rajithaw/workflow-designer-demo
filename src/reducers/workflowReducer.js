import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function workflowReducer(state = initialState.workflows, action) {
    switch(action.type) {
        default:
            return state;
    }
}