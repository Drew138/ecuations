import React, {useRef} from 'react'
import MyForm from './SignUp'
import CanvasDraw from "react-canvas-draw";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from "@material-ui/core";
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
        // height:"83.5vh",
        minimumHeight: "83.tvh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
    root: {
        width: "1002px",
        height: "352px",
        borderColor: "black",
        border: "solid 1px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px"
    },
    title: {
        fontFamily: 'Andika New Basic',
        margin: "10px"
    },
    paper: {
        width: "450px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "5px"
    }
}));

interface Props {

}
// TODO save board as png and send request with it
// https://www.npmjs.com/package/html-to-image

export default function Home(): JSX.Element {

    const classes = useStyles();

    const boardRef = useRef<CanvasDraw>(null)

    const onClear = () => {
        if (boardRef.current != null) {
            boardRef.current.clear()
        }
    }

    const onUndo = () => {
        if (boardRef.current != null) {
            boardRef.current.undo()
        }
    }

    const onSubmit = () => {
        if (boardRef.current != null) {
            const image = boardRef.current.getSaveData()
            console.log(image)
        }
    }

    return (
        <div className={classes.container}>
            <Typography component="h2" variant="h4" className={classes.title}>
                Write your Ecuation
            </Typography>
            <div className={classes.root}>
                <CanvasDraw
                    brushRadius={3}
                    lazyRadius={0}
                    hideGrid={true}
                    canvasWidth={1000}
                    canvasHeight={350}
                    ref={boardRef}
                    />
            </div>
            <Paper className={classes.paper}>
                <Button
                variant="contained"
                color="secondary"
                onClick={onClear}
                >
                Clear
                </Button>
                <Button
                variant="contained"
                color="inherit"
                onClick={onUndo}
                >
                Undo
                </Button>
                <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
                >
                Submit
                </Button>

            </Paper>
            
        </div>
    )
}
// https://www.npmjs.com/package/react-canvas-draw