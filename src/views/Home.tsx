import React from 'react'
import MyForm from './SignUp'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cont: {width: "100%", height: "100%"}
}));

export default function Home(): JSX.Element {
    const classes = useStyles();
    const onSubmit = () => {console.log("hir")} 
    return (
        <div className={classes.cont}>
            {/* <MyForm  => { */}
        {/* //   console.log(email, firstName, lastName); */}
        {/* }}/> */}
        </div>
    )
}