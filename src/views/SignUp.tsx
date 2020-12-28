import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CustomForm from '../components/form/Form';
import { REGISTER_ENDPOINT } from '../configuration'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import { stringify } from 'querystring';

interface RegisterTypes {
    name: string;
    surname: string;
    password: string;
    email: string;
    confirm: string;
}

interface Props {
    onSubmit: (values: RegisterTypes) => Promise<void>;
    closeWarning: () => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minumumHeight: "83.5vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
}));

const SignUp: React.FC<Props> = () => {
    const history = useHistory()
    const classes = useStyles()
    const [warning, setWarning] = useState(false);
    const [alertText, setAlertText] = useState("");


    const onSubmit = async (values: RegisterTypes) => {
        if (values.password !== values.confirm) {
            setAlertText(() => "Passwords do not match")
            setWarning(() => !warning)
            return
        }
        try {
            console.log(values)
            const res = await axios.post(REGISTER_ENDPOINT, values)
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
            <CustomForm onSubmit={onSubmit} formType={"register-admin"} />
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
};

export default SignUp

// https://github.com/benawad/react-typescript-material-ui-form/blob/master/src/MyForm.tsx