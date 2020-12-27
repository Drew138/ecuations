import React, {useEffect, useState} from 'react'
import { Button, Grid, Paper, RadioGroup, FormControl, FormControlLabel, FormLabel, CardHeader  } from "@material-ui/core";
import { Form, Field } from 'react-final-form';
import {TextField, Checkbox, Radio, Select, Input} from 'final-form-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import UserType from './UserType'
import Typography from '@material-ui/core/Typography';
// https://github.com/benawad/react-typescript-material-ui-form/blob/master/src/MyForm.tsx

interface Values {
    name: string;
    surname: string;
    password: string;
    email: string;
    confirm: string;
}

interface Props {
    formType: string,
    onSubmit: (values: Values) => Promise<void>;
}

const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
    //   overflow: 'hidden',
    //   padding: theme.spacing(0, 3),
    //   height: "89.5vh"
    },
    paper: {
      width: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    title: {
        fontFamily: 'Andika New Basic',
      },
  }));

const CustomForm: React.FC<Props> = ({onSubmit, formType}) => {
    const classes = useStyles();

    return (
        <Form onSubmit={onSubmit}
            render={({ handleSubmit }) => (<form className={classes.root} onSubmit={handleSubmit}>
                <Paper elevation={3} className={classes.paper}>
                    <Grid direction="column" container spacing={2}>
                        <Grid item>
                            <Typography component="h2" variant="h4" className={classes.title}>
                                {(formType === "register" || formType === "register-admin") ? "Sign Up" : "Log In"}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Field name="name" placeholder="Name" component={TextField}/>
                        </Grid>
                        {
                            (formType === "register" || formType === "register-admin") &&
                            <React.Fragment>
                                <Grid item>
                                    <Field name="surname" placeholder="Surname" component={TextField}/>
                                </Grid>
                                <Grid item>
                                    <Field name="email" placeholder="Email" type="email" component={TextField}/>
                                </Grid>
                            </React.Fragment>
                        }
                        <Grid item>
                            <Field name="password"
                            placeholder="Password" 
                            type="password"
                            component={TextField}/>
                        </Grid>
                        {
                            (formType === "register" || formType === "register-admin") &&
                            <React.Fragment>
                                <Grid item>
                                    <Field name="confirm" 
                                    placeholder="Confirm Password"
                                    type="password"
                                    component={TextField}/>
                                </Grid>
                            </React.Fragment>
                        }
                        {formType === "register-admin" && <UserType/>}                     
                        <Grid item >
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                            </Grid> 
                    </Grid>
                </Paper>
            </form>)} 
        />
    )
};

export default CustomForm