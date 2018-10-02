const themeObject = {
  palette: {
    primary: {
      main: "#d81b60"
    },
    secondary: {
      main: "#8e24aa"
    },
    // background:{
    //   default:"#eee"
    // }
  },
  overrides: {
    MuiCard: {
      root: {
        margin: "30px 8px 30px 8px",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        borderRadius: "6px",
        overflow:"none"
      }
    },
    MuiTypography:{
      headline:{
        color: "#3C4858",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 300
      }
    },
    MuiFormControl: {
      root: {
        marginBottom: "8px",
        marginTop:"8px"
      },
      // fullWidth: {
      //   width: "95% !important"
      // }
    },
  }
};

export default themeObject;
