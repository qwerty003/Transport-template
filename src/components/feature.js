import React, { Component } from 'react';
import pin from "../images/pin.png";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 70,
        transform: "rotate(0deg)",
    },
    cardroot: {
        paddingTop: 20,
        height: 200,
        width: 200,
        ['@media (max-width:550px)']: {
            height: 175,
            width: 175,
        },
    },
    
});

/*
props - 
    image -> Feature image
    desc -> Description of feature
*/
export default function Feature(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className={classes.root} style={{transform:"rotate("+props.rotate+"deg)"}}>
                <div className={classes.cardroot}>   
                    <Card elevation={10}>
                    <img src={pin} width="26px" style={{ position: 'absolute', zIndex: '1', marginTop: -10 }}></img>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project"
                                image={props.image}
                                title="Project"
                            />
                            <CardContent>
                                <Typography variant="body2" component="h7">
                                    {props.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Container>
        </React.Fragment>
    );
}