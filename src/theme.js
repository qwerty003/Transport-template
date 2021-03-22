import { createMuiTheme, responsiveFontSizes }  from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Raleway',
      'Open Sans',
      'Ruda',
      'Lato',
      'Sacramento',
      'Allura',
      'cursive',
    ].join(','),
    h2: {
      fontSize: '6rem',
      fontFamily: 'Sacramento',
    },
    h3: {
      fontSize: '3.6rem',
      fontFamily: 'Raleway',
    },
    h7: {
      fontSize: '2.1rem',
      fontFamily: 'Open Sans',
    },
    body2: {
      fontSize: '0.8rem',
      fontFamily: 'Lato',
      color: '#000000'
    },
    subtitle1:{
      fontSize: '1rem',
      color: '#544D4D'
    }
  },
  palette: {
    primary: { 
      main: '#bcf1ff',//light-blue
      icons: '#000000',
    },
    secondary: {
      main: '#72C0D5',//blue
      icons: '#FFFFFF'
    },
    text: {
      primary: '#000000',//white
      secondary: '#FFFFFF',//black
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor : "#bcf1ff",
          backgroundImage: "url(https://www.transparenttextures.com/patterns/inspiration-geometry.png)"
        }
      }
    }
  }
}));
const theme2 = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Raleway',
      'Open Sans',
      'Ruda',
      'Lato',
      'Sacramento',
      'Allura',
      'cursive',
    ].join(','),
    h2: {
      fontSize: '6rem',
      fontFamily: 'Sacramento',
    },
    h3: {
      fontSize: '3.6rem',
      fontFamily: 'Raleway',
    },
    h7: {
      fontSize: '2.1rem',
      fontFamily: 'Open Sans',
    },
    body2: {
      fontSize: '0.8rem',
      fontFamily: 'Lato',
      color: '#000000'
    },
    subtitle1:{
      fontSize: '1rem',
      color: '#FFFFFF'
    }
  },
  palette: {
    primary: { 
      main: '#777777',//gray
      icons: '#FFFFFF',
    },
    secondary: {
      main: '#000000',//black
      icons: '#FFFFFF'
    },
    text: {
      primary: '#000000',//black
      secondary: '#FFFFFF',//white
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor : "#777777",//gray
          backgroundImage: "url(https://www.transparenttextures.com/patterns/inspiration-geometry.png)"
        }
      }
    }
  }
}));


export default theme ;
export {theme2} ;
/*
#87F3EA
#bcf1ff
*/