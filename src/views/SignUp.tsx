import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CustomForm from '../components/form/Form';


interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height:"89.5vh",
        justifyContent: "center",
        alignItems: "center",
    },
    paper: {
      maxWidth: 600,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    title: {
        fontFamily: 'Andika New Basic',
      },
  }));

const MyForm: React.FC<Props> = ({onSubmit}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CustomForm onSubmit={onSubmit} formType={"register"}/>
        </div>
    )
};

export default MyForm

// https://github.com/benawad/react-typescript-material-ui-form/blob/master/src/MyForm.tsx