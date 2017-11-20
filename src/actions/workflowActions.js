import * as types from './actionTypes';
import WorkflowQueryService from '../services/workflowQueryService';
import WorkflowService from '../services/workflowService';

export function searchWorkflows(workflowQuery) {
    return {
        type: types.SEARCH_WORKFLOWS,
        workflowQuery
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

export function loadWorkflowsSuccess(results) {
    return { 
        type: types.LOAD_WORKFLOWS_SUCCESS, 
        workflowList: results 
    };
}

export function loadWorkflow(id) {
    return function (dispatch) {  
        return WorkflowQueryService.findById(id)
            .then(results => {
                dispatch(loadWorkflowSuccess(results));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function loadWorkflowSuccess(results) {
    return { 
        type: types.LOAD_WORKFLOW_SUCCESS, 
        workflow: results 
    };
}

export function createWorkflow(workflow) {
    return function (dispatch) {  
        return WorkflowService.create(workflow)
            .then(results => {
                dispatch(createWorkflowSuccess(results));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function createWorkflowSuccess(workflow) {
    return {
        type: types.CREATE_WORKFLOW_SUCCESS,
        workflow
    };
}