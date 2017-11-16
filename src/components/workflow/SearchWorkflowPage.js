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
            query: Object.assign({}, props.query)
        };

        this.searchWorkflows = this.searchWorkflows.bind(this);
    }

    searchWorkflows(event) {
        event.preventDefault();
        alert(`Searching... ${this.state.query.name} - ${this.state.query.createdAfter} - ${this.state.query.createdBefore}`);
        this.props.actions.searchWorkflows(this.state.query);
    }

    render() {
        return (
            <SearchWorkflow 
                query = {this.state.query}
                onSearchWorkflows = {this.searchWorkflows} />
        );
    }
}

SearchWorkflowPage.propTypes = {
    query: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        query: state.workflowQuery
    };
}

function mapDispatchToProps(dispatch) {
    return { 
        actions: bindActionCreators(workflowActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWorkflowPage);