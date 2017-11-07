import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../common/NavigationBar';
import SearchWorkflowPage from '../workflow/SearchWorkflowPage';
import WorkflowListPage from '../workflow/WorkflowListPage';
import ManageWorkflowPage from '../workflow/ManageWorkflowPage';

class Main extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Route exact path="/" component={SearchWorkflowPage}/>
                <Route exact path="/workflows" component={WorkflowListPage}/>
                <Route exact path="/workflow/:id?" component={ManageWorkflowPage}/>   
            </div>
        );
    }
}

export default Main;