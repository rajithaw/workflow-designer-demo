import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as workflowActions from '../../actions/workflowActions';

class WorkflowListPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.props.dispatch(workflowActions.loadWorkflows());
    }

    render() {
        return(
            <div>
                <h1>Workflow List</h1>
            </div>
        );
    }
}

WorkflowListPage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        workflows: state.workflowsList.workflows,
        totalCount: state.workflowsList.totalCount
    };
}

export default connect(mapStateToProps)(WorkflowListPage);