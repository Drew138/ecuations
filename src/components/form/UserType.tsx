
import React from 'react'
import { Button, Grid, Paper, RadioGroup, FormControl, FormControlLabel, FormLabel } from "@material-ui/core";
import { Form, Field } from 'react-final-form';
import {TextField, Checkbox, Radio, Select, Input} from 'final-form-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const UserType = () => {

    return (
        <Grid item>
            <FormControl component="fieldset">
                <FormLabel component="legend">User Type</FormLabel>
                <RadioGroup row>
                    <FormControlLabel
                        label="Client"
                        control={
                        <Field
                            name="stooge"
                            component={Radio}
                            type="radio"
                            value="client"
                        />
                        }
                    />
                    <FormControlLabel
                        label="Admin"
                        control={
                        <Field
                            name="stooge"
                            component={Radio}
                            type="radio"
                            value="admin"
                        />
                        }
                    />
                </RadioGroup>
            </FormControl>
        </Grid>
    )
}

export default UserType