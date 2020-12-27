import React from 'react'
// import MyForm from './SignUp'
import {default as UICard} from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
//     cont: {
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
// },
    r: {width: "20%", minumumHeight: "45%"},
    button: {
        marginTop: "5px",
        marginBottom: "5px"
    }    
}));


export default function Card(): JSX.Element {
    const classes = useStyles();

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
                        Create An Account
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Delete An Account
                    </Button>
                    <Button color="secondary" variant="outlined" className={classes.button}>
                        Delete My Account
                    </Button>
                </CardContent>
            </UICard>
    )
}