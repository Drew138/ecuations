import React, {useState} from 'react'
// import MyForm from './SignUp'
import {default as UICard} from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import SweetAlert from 'react-bootstrap-sweetalert';
import { DELETE_ACCOUNT_ENDPOINT, UPDATE_ACCOUNT_ENPOINT } from "../../configuration"
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
//     cont: {
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
// },
    r: {width: "30%", minumumHeight: "45%"},
    button: {
        margin: "5px"
    }
}));


const Card: React.FC = () => {
    const classes = useStyles();
    const [warningIsOpen, setWarningIsOpen] = useState(false);

    const openWarning = () => {
        setWarningIsOpen(() => !warningIsOpen)
    }

    const onConfirm = async () => {
        try {
            const res = await axios.delete(DELETE_ACCOUNT_ENDPOINT)
            // TODO
        } catch (e) {

        }
        
        setWarningIsOpen(() => !warningIsOpen)
    }
    
    const onCancel = () => {
        setWarningIsOpen(() => !warningIsOpen)
    }

    const onUpdate = async () => {
        try {
            const res = await axios.patch(UPDATE_ACCOUNT_ENPOINT)
        } catch (e) {

        }
    }

    return (
            <UICard className={classes.r}>
                <CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" >
                            R
                        </Avatar>
                        }
                        // action={
                        // <IconButton aria-label="settings">
                        //     <MoreVertIcon />
                        // </IconButton>
                        // }
                        title="Account Manager"
                        subheader="View your account details"
                    />
                    <Button variant="contained" color="primary" className={classes.button}>
                        Update
                    </Button>
                    
                    <Button 
                        color="secondary" 
                        variant="outlined" 
                        className={classes.button} 
                        onClick={openWarning}>
                        Delete My Account
                    </Button>
                </CardContent>
                <SweetAlert
                    title="Warning!"
                    warning
                    showCancel
                    cancelBtnText="Cancel"
                    confirmBtnText="Yes, Delete my Account"
                    confirmBtnBsStyle="danger"
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                    show={warningIsOpen}
                >
                    Deleting your account is an irreversible action, and in doing so you will delete all your queries.
                </SweetAlert>
            </UICard>
    )
}

export default Card