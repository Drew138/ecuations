import GitHubIcon from '@material-ui/icons/GitHub';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React from 'react'
// import MyForm from './SignUp'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cont: {
        width: "100%",
        height: "100%",
    }
}));

export default function Footer(): JSX.Element {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation
        value={value} 
        onChange={handleChange} 
        showLabels
      >
         <BottomNavigationAction label="Frontend" value="frontend" icon={<GitHubIcon />} />
         <BottomNavigationAction label="Backend" value="backend" icon={<GitHubIcon />} />
      </BottomNavigation>

    )
}