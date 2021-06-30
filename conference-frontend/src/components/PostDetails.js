import { Button, Divider, Grid, List, ListItem, ListItemText, Paper,Typography,withStyles } from '@material-ui/core';
import React,{useEffect,useState, Fragment} from 'react';
import{connect} from 'react-redux';
import * as actions from '../actions/postDetail';
import PostDetailForm from './PostDetailForm';
import ButterToast,{Cinnamon} from "butter-toast";
import {DeleteSweep} from "@material-ui/icons";


const styles = theme => ({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: "center"
    }
})

const PostDetails = ({ classes, ...props }) => {

    // const [x,setX] = useState(0)
    // setX(5)
    const [currentId, setCurrentId] = useState(0)


    useEffect(() => {
        props.fetchAllPostDetails()
    }, [])

    const onDelete = id => {
        const onSuccess = () => {
            // window.alert('Deleted Successfully!!')
            ButterToast.raise({
                content: <Cinnamon.Crisp title="Conference Details Deleted Successfully"
                    content=" Details Removed !!"
                    scheme={Cinnamon.Crisp.SCHEME_RED}
                    maxWidth="large"
                    icon={<DeleteSweep />}
                />
            })
        }
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteConferenceDetails(id, onSuccess)
    }



    return (
        <Grid container >
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <PostDetailForm {...{ currentId, setCurrentId }} />
                </Paper>
            </Grid>
            <Grid item xs={7}>
                <Paper className={classes.paper}>
                    <List>
                        {
                            props.postDetailsList.map((record, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ListItem>
                                            <ListItemText>
                                                <Typography variant="h5" style={{ whiteSpace: 'pre-line' }} align="left" color="primary" display="block">
                                                    TITLE : {record.title}
                                                </Typography>

                                                <Typography variant="h4" style={{ whiteSpace: 'pre-line' }} align="center" >
                                                    DATE : {record.date}
                                                </Typography>

                                                <Typography variant="h5" style={{ whiteSpace: 'pre-line' }} display="block">
                                                    VENUE : {record.venue}
                                                </Typography>

                                                <div>
                                                    {record.description}
                                                </div>

                                                <div className={classes.actionDiv}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => setCurrentId(record._id)}
                                                    > Edit </Button>

                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => onDelete(record._id)}
                                                    > Delete </Button>
                                                </div>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component="li" />
                                    </Fragment>
                                )
                            })
                        }
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => ({
    postDetailsList: state.postDetail.list
})


const mapActionToProps = {
    fetchAllPostDetails: actions.fetchAll,
    deleteConferenceDetails: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostDetails));