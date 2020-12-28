import React from 'react'
// import MyForm from './SignUp'

import Card from "../components/account/Card"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cont: {
        // width: "100%",
        // height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height:"83.5vh",
        backgroundColor: "#F0F0F0"
    }
}));

export default function Account(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.cont}>
            <Card/>
        </div>
    )
}