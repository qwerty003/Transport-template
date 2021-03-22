import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
/*
CDNs: http://cdn.backgroundhost.com/backgrounds/subtlepatterns/purty_wood.png
      http://cdn.backgroundhost.com/backgrounds/subtlepatterns/pool_table.png
      https://www.toptal.com/designers/subtlepatterns/patterns/oriental-tiles.png
      https://www.toptal.com/designers/subtlepatterns/patterns/pool_table.png
      https://www.toptal.com/designers/subtlepatterns/patterns/dark_wood.png
      https://www.toptal.com/designers/subtlepatterns/patterns/lined_paper.png
      https://www.toptal.com/designers/subtlepatterns/patterns/foggy_birds.png white
      https://www.toptal.com/designers/subtlepatterns/patterns/diagonal_striped_brick.png white
      https://www.toptal.com/designers/subtlepatterns/patterns/arab_tile.png light-purple
      https://www.toptal.com/designers/subtlepatterns/patterns/gplaypattern.png light-purple
      https://www.toptal.com/designers/subtlepatterns/patterns/food.png yellow
      https://www.toptal.com/designers/subtlepatterns/patterns/skulls.png light purple
      https://www.toptal.com/designers/subtlepatterns/patterns/giftly.png light-purple
      https://www.toptal.com/designers/subtlepatterns/patterns/old_map.png face
      https://www.toptal.com/designers/subtlepatterns/patterns/restaurant.png blue
      https://www.toptal.com/designers/subtlepatterns/patterns/congruent_pentagon.png blue-diamond
      https://www.toptal.com/designers/subtlepatterns/patterns/sakura.png pink
      https://www.toptal.com/designers/subtlepatterns/patterns/wormz.png blue
      https://www.toptal.com/designers/subtlepatterns/patterns/just-waves.png blue
      https://www.toptal.com/designers/subtlepatterns/patterns/wheat.png dark-blue
      https://www.toptal.com/designers/subtlepatterns/patterns/dark-paths.png dark-purple
      https://www.toptal.com/designers/subtlepatterns/patterns/circle-blues.png dark-purple
      https://www.toptal.com/designers/subtlepatterns/patterns/memphis-colorful.png
      https://www.toptal.com/designers/subtlepatterns/patterns/positive.png dotted
*/

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        marginBottom: '10px',
    },
    paper1: {
        gridColumn: '6/10',
        paddingTop: '66.66%',
        WebkitBoxReflect: 'below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.1))',
        backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/patterns/circle-blues.png)',
        ['@media (max-width:550px)']: {
            gridColumn: '5/11',
        },
        ['@media (max-width:720px)']: {
            gridColumn: '5/10',
        },
    },
    paper2: {
        gridColumn: '8/12',
        paddingTop: '66.66%',
        zIndex: '1',
        marginTop: '-50%',
        WebkitBoxReflect: 'below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.2))',
        backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/patterns/halftone-yellow.png)',
        ['@media (max-width:550px)']: {
            gridColumn: '7/13',
        },
        ['@media (max-width:720px)']: {
            gridColumn: '7/12',
        },

    },
    paper3: {
        gridColumn: '7/11',
        paddingTop: '66.66%',
        zIndex: '2',
        marginTop: '-50%',
        WebkitBoxReflect: 'below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.1))',
        backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/patterns/sakura.png)',
        ['@media (max-width:550px)']: {
            gridColumn: '6/12',
        },
        ['@media (max-width:720px)']: {
            gridColumn: '6/11',
        },
    }
});

export default function Cards() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper1} elevation={3} />
            <Paper className={classes.paper2} elevation={3} />
            <Paper className={classes.paper3} elevation={3} />
        </div>

    );
}