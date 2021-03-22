import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import theme, { theme2 } from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProgressBar from './components/progress';
import NavigationMenu from './components/navigation';
import Cards from './components/cards';
import Fabs from './components/fabs';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Feature from './components/feature';
import feature1 from "./images/first.png";
import feature2 from "./images/second.png";
import feature3 from "./images/third.png";
import feature4 from "./images/fourth.png";
import feature5 from "./images/fifth.png";
import feature6 from "./images/sixth.png";
import feature7 from "./images/seventh.png";
import Quote from './components/quote';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const features = [{ image: feature1, rotate: calcRotate(), desc: "Super Fast Delivery worldwide" },
{ image: feature2, rotate: calcRotate(), desc: "Track Package" },
{ image: feature3, rotate: calcRotate(), desc: "Multi-Stop delivery" },
{ image: feature4, rotate: calcRotate(), desc: "24x7 Support via Call/Chat" },
{ image: feature5, rotate: calcRotate(), desc: "Huge transportation Network" },
{ image: feature6, rotate: calcRotate(), desc: "Real-time monitoring & Fraud Detection" },
{ image: feature7, rotate: calcRotate(), desc: "One Time Offer - 30% off on all package deliveries" },
];

function calcRotate() {
    return (Math.floor(Math.random() * (1.5 - (-1.5) + 1.5) + (-1.5)))
}
const useStyles = makeStyles({
    root: {
    },
    featurediv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button:{
        borderRadius: '20px',
        padding: '8px 40px',
    },
    footer: {
        textAlign: 'center',
        marginTop: 100,
        padding : 50,
    }
});


export default function Template() {
    const [newtheme, setTheme] = React.useState(false)
    function changeTheme() {
        setTheme(!newtheme)
    }
    const appliedTheme = createMuiTheme(newtheme ? theme2 : theme);
    const classes = useStyles();
    return (
        <React.Fragment>
            <ThemeProvider theme={appliedTheme}>
                <CssBaseline />
                <ProgressBar></ProgressBar>
                {/* Navigation Menu */}
                <NavigationMenu handleSwitch={() => { changeTheme() }}></NavigationMenu>
                <br /><br />

                {/* Card Design */}
                <Cards></Cards>
                <br />

                {/* Button and Title*/}
                <Container maxWidth="md" style={{ textAlign: 'center' }}>
                    <Button variant="contained" color="secondary" className={classes.button} href="#">
                        Register
                    </Button>
                </Container>
                <br />
                <Typography component="h1" variant="h2" align="center" gutterBottom>
                    Company
                </Typography>
                <br /><br />
                
                {/* Speed Dial */}
                <Fabs></Fabs>
                
                {/* Features */}
                <Typography variant="h3" align="left" style={{ marginLeft: '8%', marginTop:50 }} gutterBottom>
                    Features
                </Typography>
                <Container maxwidth="md" style={{ textAlign: 'center' }}>
                    <div className={classes.featurediv}>
                        {features.map((feature) =>

                            <div key={feature.desc}>
                                <Feature {...feature}>
                                </Feature>
                            </div>

                        )}
                    </div>
                </Container>
                {/* End Features */}

                {/* Quotes */}
                <Typography variant="h3" align="right" style={{ marginRight: '12%', marginTop:120 }} gutterBottom>
                    Reviews
                </Typography>
                <Quote desc="Excellent Customer Service and all time availabiltiy." />
                <Quote desc="Very quick transportation and impressive packaging of fragile objects." />

                {/* Footer */}
                <Container maxWidth="100%" className={classes.footer} style={{ backgroundImage: "linear-gradient(to bottom, " + appliedTheme.palette.primary.main + "," + appliedTheme.palette.secondary.main + ")" }}>
                    <div><TwitterIcon /> &nbsp; <FacebookIcon /> &nbsp; <RedditIcon /> &nbsp; <LinkedInIcon /></div>
                    <br />
                    <div>  Products  • Services •	Contacts </div>
                    <br />
                    <Typography variant="subtitle1"> © Made by @abigit using &nbsp;<i class="devicon-react-original-wordmark colored" style={{ fontSize: "2rem" }} /></Typography>
                </Container>
                {/* End footer */}

            </ThemeProvider>
        </React.Fragment>
    );
}

