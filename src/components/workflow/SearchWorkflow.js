import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import * as workflowActions from '../../actions/workflowActions';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit
    }
});

class SearchWorkflow extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.query = props.query;
        this.onNameChange = this.onNameChange.bind(this);
        this.onCreatedAfterChange = this.onCreatedAfterChange.bind(this);
        this.onCreatedBeforeChange = this.onCreatedBeforeChange.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
    }

    onNameChange(event) {
        this.query.name = event.target.value;
    }

    onCreatedAfterChange(event) {
        this.query.createdAfter = event.target.value;
    }

    onCreatedBeforeChange(event) {
        this.query.createdBefore = event.target.value;
    }

    onSearchClick(event) {
        this.setState({workflowQuery: this.query});
        this.props.onSearchWorkflows(event);
    }

    render() {
        const { classes } = this.props;

        return(
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        id="name"
                        type="search"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Workflow Name"
                        fullWidth
                        margin="normal"
                        defaultValue={this.query.name}
                        onChange={this.onNameChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="createdAfter"
                        label="Created after"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        defaultValue={this.query.createdAfter}
                        onChange={this.onCreatedAfterChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="createdBefore"
                        label="Created before"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        defaultValue={this.query.createdBefore}
                        onChange={this.onCreatedBeforeChange}/>
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                        <Button 
                            raised 
                            color="primary" 
                            className={classes.button} 
                            onClick={this.onSearchClick}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

SearchWorkflow.propTypes = {
    classes: PropTypes.object.isRequired,
    query: PropTypes.object,
    onSearchWorkflows: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchWorkflow);