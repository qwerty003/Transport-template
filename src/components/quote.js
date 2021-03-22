import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import qmarks from "../images/quotes.png";

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: 20,
    },
    cardroot: {
        marginLeft: 'auto',
        textAlign: 'left',
        marginTop: 60,
        marginBottom: 0,
        width: '50%',
        ['@media (max-width:550px)']: {
            marginRight: 20,
        },
    },
});

export default function Quote(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" className={classes.root}>
                <div className={classes.cardroot}>
                    <Card elevation={5}>
                        <CardContent>
                        <img src={qmarks} width="80px" style={{ position: 'absolute', zIndex: '1', marginTop: -60,marginLeft: -40, transform: "scale(-1,-1)"}}></img>
                            <Typography component="h5" variant="h5">
                                {props.desc}
                            </Typography>
                            <div style={{textAlign:"right"}}>
                        <img src={qmarks} width="80px" style={{ position: 'absolute', zIndex: '1', marginTop: -15,marginLeft: -30}}></img>
                        </div>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </React.Fragment>
    );
}