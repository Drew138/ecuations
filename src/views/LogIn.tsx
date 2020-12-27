import React from 'react'
import CustomForm from '../components/form/Form'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {LOGIN_ENDPOINT} from '../configuration'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height:"83.5vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
  }));

interface LoginTypes {
    name: string;
    password: string
}

interface Props {
    onSubmit: (values: LoginTypes) => Promise<void>;
}

const LogIn: React.FC<Props> = () => {
    const history = useHistory()
    const classes = useStyles()
    const onSubmit = async (values: LoginTypes) => {
        try {
            const res = await axios.post(LOGIN_ENDPOINT, values)

            history.push("/")
        } catch (e) {
        
        }
    } 
    
    return (
        
        <div className={classes.root}>
            <CustomForm onSubmit={onSubmit} formType={"login"}/>
        </div>
    )
}

export default LogIn