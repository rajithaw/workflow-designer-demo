import { combineReducers } from 'redux';
import workflowReducer from './workflowReducer';
import workflowQueryReducer from './workflowQueryReducer';

const rootReducer = combineReducers({
    workflowsList: workflowReducer,
    workflowQuery: workflowQueryReducer
});

export default rootReducer;