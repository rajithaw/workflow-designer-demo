import * as types from './actionTypes';

export function searchWorkflows(filter) {
    return {
        type: types.SEARCH_WORKFLOWS,
        filter
    };
}