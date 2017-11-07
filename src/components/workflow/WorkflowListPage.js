import React from 'react';
import { connect } from 'react-redux';

class WorkflowListPage extends React.Component {
    render() {
        return(
            <div>
                <h1>Workflow List</h1>
            </div>
        );
    }
}

export default connect()(WorkflowListPage);