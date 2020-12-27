import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CustomForm from '../components/form/Form';
import {REGISTER_ENDPOINT} from '../configuration'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

interface RegisterTypes {
    name: string;
    surname: string;
    password: string;
    email: string;
    confirm: string;
}

interface Props {
    onSubmit: (values: RegisterTypes) => Promise<void>;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height:"83.5vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
    // paper: {
    //   maxWidth: 600,
    //   margin: `${theme.spacing(1)}px auto`,
    //   padding: theme.spacing(2),
    // },
    // title: {
    //     fontFamily: 'Andika New Basic',
    //   },
  }));

const SignUp: React.FC<Props> = () => {
    const history = useHistory()
    const classes = useStyles()
    const [warning, setWarning] = useState(false);

    const onSubmit = async (values: RegisterTypes) => {
        try {
            console.log(values)
            // const res = await axios.post(REGISTER_ENDPOINT, values)

            setWarning(() => !warning)
            // history.push("/")
        } catch (e) {

        }
    } 

    const closeWarning = () => {
        setWarning(() => !warning)
    }

    return (
        <div className={classes.root}>
            <CustomForm onSubmit={onSubmit} formType={"register-admin"}/>
            <SweetAlert 
            title="An error"
            danger
            confirmBtnBsStyle="primary"
            confirmBtnText="Continue"
            // customButtons
            onConfirm={closeWarning}
            show={warning}
            >
                Lorem ipsum dolor sit amet consectetur 
            </SweetAlert>
        </div>
    )
};

export default SignUp

// https://github.com/benawad/react-typescript-material-ui-form/blob/master/src/MyForm.tsx