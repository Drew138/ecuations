import React from 'react'
// import MyForm from './SignUp'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cont: {
        width: "100%", 
        height: "100%",
        backgroundColor: "#F0F0F0"
    }
}));
// https://material-ui.com/components/avatars/
export default function History(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.cont}>
            {/* <MyForm onSubmit={({ email, firstName, lastName }) => {
        //   console.log(email, firstName, lastName);
        }}/> */}
        </div>
    )
}