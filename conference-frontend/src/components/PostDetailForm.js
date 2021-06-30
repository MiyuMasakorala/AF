import { Button, TextField , withStyles} from '@material-ui/core';
import React,{useEffect,useState} from 'react';
import detailForm from './detailForm';
import {connect} from 'react-redux';
import * as actions from '../actions/postDetail';
import ButterToast,{Cinnamon} from "butter-toast";
import {AssignmentTurnedIn} from "@material-ui/icons";
import {Grid} from "@material-ui/core"; 
import DescriptionIcon from '@material-ui/icons/Description';
//import {FormHeader} from "@material-ui/core";
import { CardHeader } from '@material-ui/core';
//import {PageHeader} from "@material-ui/core";

const initialFieldValues = {
    title: '',
    date: '',
    venue: '',
    description: ''
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            //background:'#828181',

        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#f2f765',
        //font:'Oswald',
    },
    postBtn: {
        width: "70%",
        palette: {
            primary: {
                main: '#070369'
            }
        },
    },

    InputLabelProps: {
        fontStyle: 'bold',
    },
})

const PostDetailForm = ({ classes, ...props }) => {

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.postDetailsList.find(x => x._id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    const validate = () => {
        let field = { ...errors }
        field.title = values.title ? "" : "This field is required."
        field.date = values.date ? "" : "This field is required."
        field.venue = values.venue ? "" : "This field is required."
        field.description = values.description ? "" : "This field is required."
        setErrors({
            ...field
        })
        return Object.values(field).every(x => x == "")
    }

    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetDetailForm
    } = detailForm(initialFieldValues, props.setCurrentId)

    const handleSubmit = e => {
        e.preventDefault() // prevent from reload
        const onSuccess = () => {
            //window.alert('Added Successfully!!')
            ButterToast.raise({
                content: <Cinnamon.Crisp title="Conference Details Added Successfully"
                    content=" New Conference Detail is added!!"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                    icon={<AssignmentTurnedIn />}
                    style={{ minHeight: "30vh" }}
                />

            })
        }
        resetDetailForm()
        if (validate()) {
            if (props.currentId == 0) {
                props.createConferenceDetail(values, onSuccess)
            } else
                props.updateConferenceDetail(props.currentId, values, onSuccess)
        }
    }

    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
            <Grid container style={{ minHeight: "30vh" }}>
                <Grid item xs={15} sm={12}>
                    <img
                        src="https://cdn.oreillystatic.com/en/assets/1/event/294/velocityca2019_og_image.jpg"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Grid>
            </Grid>
            <TextField
                name="title"
                variant="outlined"
                label="Title"
                InputLabelProps={{ style: { fontSize: 20 } }}
                inputProps={{ style: { fontSize: 20 } }}
                fullWidth
                multiline
                rows={4}
                value={values.title}
                onChange={handleInputChange}
                {...(errors.title && { error: true, helperText: errors.title })}
            />

            <TextField
                name="date"
                variant="outlined"
                label="Date"
                InputLabelProps={{ style: { fontSize: 20 } }}
                inputProps={{ style: { fontSize: 20 } }}
                fullWidth
                multiline
                rows={4}
                value={values.date}
                onChange={handleInputChange}
                {...(errors.date && { error: true, helperText: errors.date })}
            />

            <TextField
                name="venue"
                variant="outlined"
                label="Venue"
                InputLabelProps={{ style: { fontSize: 20, fontStyle: 'bold' } }}
                inputProps={{ style: { fontSize: 20 } }}
                fullWidth
                multiline
                rows={4}
                value={values.venue}
                onChange={handleInputChange}
                {...(errors.venue && { error: true, helperText: errors.venue })}
            />

            <TextField
                name="description"
                variant="outlined"
                label="Description"
                InputLabelProps={{ style: { fontSize: 20 } }}
                inputProps={{ style: { fontSize: 20 } }}
                fullWidth
                multiline
                rows={10}
                value={values.description}
                onChange={handleInputChange}
                {...(errors.description && { error: true, helperText: errors.description })}
            />

            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
            >Add Details</Button>
        </form>
    );
}

const mapStateToProps = state => ({
    postDetailsList: state.postDetail.list
})

const mapActionToProps = {
    createConferenceDetail: actions.create,
    updateConferenceDetail: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostDetailForm));