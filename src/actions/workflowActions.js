import * as types from './actionTypes';
import WorkflowQueryService from '../services/workflowQueryService';

export function searchWorkflows(workflowQuery) {
    return {
        type: types.SEARCH_WORKFLOWS,
        workflowQuery
    };
}

export function createWorkflow(workflow) {
    return {
        type: types.CREATE_WORKFLOW,
        workflow
    };
}

export function loadWorkflowsSuccess(results) {
    return { 
        type: types.LOAD_WORKFLOWS_SUCCESS, 
        workflowsList: results 
    };
}

export function loadWorkflows() {
    return function (dispatch) {  
        return WorkflowQueryService.find()
            .then(results => {
                dispatch(loadWorkflowsSuccess(results));
            })
            .catch(error => {
                throw(error);
            });
    };
}