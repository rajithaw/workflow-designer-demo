import React from 'react';
import PropTypes from 'prop-types';
import SearchWorkflow from './SearchWorkflow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as workflowActions from '../../actions/workflowActions';

class SearchWorkflowPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            filter: Object.assign({}, props.filter)
        };

        this.searchWorkflows = this.searchWorkflows.bind(this);
    }

    searchWorkflows(event) {
        event.preventDefault();
        alert(`Searching... ${this.state.filter.name} - ${this.state.filter.createdAfter} - ${this.state.filter.createdBefore}`);
        this.props.actions.searchWorkflows(this.state.filter);
    }

    render() {
        return (
            <SearchWorkflow 
                filter = {this.state.filter}
                onSearchWorkflows = {this.searchWorkflows} />
        );
    }
}

SearchWorkflowPage.propTypes = {
    filter: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        filter: state.workflowSearchFilter
    };
}

function mapDispatchToProps(dispatch) {
    return { 
        actions: bindActionCreators(workflowActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWorkflowPage);