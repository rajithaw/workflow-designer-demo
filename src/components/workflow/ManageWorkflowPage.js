import React from 'react';
import PropTypes from 'prop-types';
import ManageWorkflow from './ManageWorkflow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as workflowActions from '../../actions/workflowActions';

class ManageWorkflowPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            workflow: {
                name: '',
                data: {}
            }
        };
    }

    onClickSave() {
        this.props.actions.createhWorkflow(this.state.workflow);
    }

    render() {
        return(
            <div>
                <h1>Manage Workflow</h1>
                <ManageWorkflow />
            </div>
        );
    }
}

ManageWorkflowPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.cources
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(workflowActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageWorkflowPage);