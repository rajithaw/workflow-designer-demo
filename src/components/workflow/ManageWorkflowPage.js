import React from 'react';
import PropTypes from 'prop-types';
import ManageWorkflow from './ManageWorkflow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as workflowActions from '../../actions/workflowActions';

class ManageWorkflowPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        let workflowId = props.match.params.id || '';
        
        debugger;
        if(workflowId) {
            props.actions.loadWorkflow(workflowId);
        }

        this.state = {
            workflow: {
                id: '',
                name: '',
                data: {}
            }
        };

        this.onClickSave = this.onClickSave.bind(this);
    }

    onClickSave() {
        this.props.actions.createWorkflow(this.state.workflow);
    }

    render() {
        return(
            <div>
                <h1>Manage Workflow</h1>
                <ManageWorkflow workflow={this.state.workflow} onSaveWorkflow={this.onClickSave}/>
            </div>
        );
    }
}

ManageWorkflowPage.propTypes = {
    actions: PropTypes.object.isRequired,
    match: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        workflow: state.activeWorkflow
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(workflowActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageWorkflowPage);