import { combineReducers } from 'redux';
import workflowReducer from './workflowReducer';
import workflowQueryReducer from './workflowQueryReducer';
import workflowListReducer from './workflowListReducer';

const rootReducer = combineReducers({
    workflow: workflowReducer,
    workflowQuery: workflowQueryReducer,
    workflowList: workflowListReducer
});

export default rootReducer;