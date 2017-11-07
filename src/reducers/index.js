import { combineReducers } from 'redux';
import workflows from './workflowReducer';
import workflowSearchFilter from './workflowSearchFilterReducer';

const rootReducer = combineReducers({
    workflows,
    workflowSearchFilter
});

export default rootReducer;