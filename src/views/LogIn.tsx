import React, {useState} from 'react'
import CustomForm from '../components/form/Form'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {LOGIN_ENDPOINT} from '../configuration'
import {useHistory} from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import { stringify } from 'querystring';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minumumHeight:"83.5vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
  }));

interface LoginTypes {
    name: string;
    password: string;
}

interface Props {
    onSubmit: (values: LoginTypes) => Promise<void>;
}

const LogIn: React.FC<Props> = () => {
    const history = useHistory()
    const classes = useStyles()
    const [warning, setWarning] = useState(false);
    const [alertText, setAlertText] = useState("");

    const onSubmit = async (values: LoginTypes) => {
        try {
            const res = await axios.post(LOGIN_ENDPOINT, values)

            history.push("/")
        } catch (e) {
            console.log(e)
            setAlertText(() => stringify(e))
            setWarning(() => !warning)
        }
    } 

    const closeWarning = () => {
        setWarning(() => !warning)
    }
    
    return (
        
        <div className={classes.root}>
            <CustomForm onSubmit={onSubmit} formType={"login"}/>
            <SweetAlert
                title="Error occurred while signing up"
                danger
                confirmBtnBsStyle="primary"
                confirmBtnText="Continue"
                onConfirm={closeWarning}
                show={warning}
            >
                {alertText}
            </SweetAlert>
        </div>
    )
}

export default LogIn