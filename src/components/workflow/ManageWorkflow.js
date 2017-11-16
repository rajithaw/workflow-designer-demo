import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
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

class ManageWorkflow extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.workflow = props.workflow;
        this.onNameChange = this.onNameChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onNameChange(event) {
        this.workflow.name = event.target.value;
    }

    onSaveClick(event) {
        this.props.onSaveWorkflow(event);
    }

    render() {
        const { classes } = this.props;

        return(
            <Grid container>
                <Grid item>
                    <TextField
                        id="name"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Workflow Name"
                        fullWidth
                        margin="normal"
                        defaultValue={this.workflow.name}
                        onChange={this.onNameChange}/>
                </Grid>
                <Grid item>
                    <Button 
                        raised 
                        color="primary" 
                        className={classes.button} 
                        onClick={this.onSaveClick}>
                        Save
                    </Button>
                    <Button 
                        component={Link} 
                        to="/workflows"
                        raised 
                        color="primary" 
                        className={classes.button}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

ManageWorkflow.propTypes = {
    classes: PropTypes.object.isRequired,
    workflow: PropTypes.object,
    onSaveWorkflow: PropTypes.func.isRequired
};

export default withStyles(styles)(ManageWorkflow);