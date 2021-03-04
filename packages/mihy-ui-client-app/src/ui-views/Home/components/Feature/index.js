import React from "react";
import { withStyles, Button, TextField, MuiThemeProvider, createMuiTheme, Paper, Hidden, } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { setStatesFromResponse } from "../../../../ui-redux/app/actions"
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import isEmpty from "lodash/isEmpty"

// import {mapDispatchToProps} from "../../../../ui-utils/commons"



const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        
        '&:after': {
          borderBottom: '2px solid #83B6E9',
        },
        '&:before': {
          borderBottom: '2px solid grey',
        },
    
      },
     
    },
    MuiFormLabel: {
      focused: {
        color: '#83B6E9 !important'
      }
    }
    
  },
});

const styles = theme => ({
  root: {
    
    flexGrow: 1,
    // flexWrap: 'wrap',
    margin: "16px"

  },
  
  margin: {
    width: "100%",
   
  },
  
});

class Feature extends React.Component {
  OnClickSubmit = async () => {
    const { enquiry } = this.props
    
    if (this.validation()) {
      const { setStatesFromResponse } = this.props
      await axios.post("https://us-central1-mihy-all.cloudfunctions.net/createEnquiry", {
        name: enquiry.inputName,
        email: enquiry.inputEmail,
        subject: enquiry.inputSubject,
        additional_info: enquiry.inputAdditional_info
      })
        .then(response => {
          console.log(response, "response")
        })
        .catch(err => console.log(err));
      setStatesFromResponse("snackbar", {
        open: true,
        variant: "Success",
        message:
          "Enquiry is Successfully Submitted"
      });
      localStorage.clear();
    }
  }
  validation = () => {
    const { enquiry, error, setStatesFromResponse } = this.props
    let boolean = true
    if (isEmpty(enquiry.inputName)) {
      boolean = false
      setStatesFromResponse(`nameError`,"Please Enter Name" )
    }
    if (isEmpty(enquiry.inputEmail)) {
      boolean = false
      setStatesFromResponse(`emailError`,"Please Enter Email")
    }
    if (isEmpty(enquiry.inputSubject)) {
      boolean = false
      setStatesFromResponse(`subjectError`,"Please Enter Subject" )
    }
    if (isEmpty(enquiry.inputAdditional_info)) {
      boolean = false
      setStatesFromResponse(`additionalInfoError`,"Please fill Additional Inforation" )
    }
    else return boolean
  }
  handleChange = (property, value) => {
    const { setStatesFromResponse, enquiry } = this.props
    setStatesFromResponse(`enquiry`, { ...enquiry, [property]: value })
  }
  render() {
    const { classes, error, enquiry,nameError,emailError,subjectError,additionalInfoError } = this.props;
    const { handleChange, OnClickSubmit } = this
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Paper style={{ padding: "10px 10px 10px 10px" }} >
              <Grid style={{ marginTop: "2%" }}>
                <Divider display="none" style={{ background: "#ffdae9", boxShadow: "0px 0px 10px #d81b60" }} />
              </Grid>
              <Typography align="center"
                style={{ color: "#808080", marginTop: "2%" }}
              >
                Let Us Know How Can We Help You
              </Typography>
              <Typography align="center"
                style={{ color: "#00AAE4" }}
              >
                Feel free to email us at Admin@mihy.org or fill in the form below.
              </Typography>
              <Grid container spacing={2}>
                <Hidden mdDown>
                  <Grid item md={2}></Grid>
                </Hidden>
                <Grid item md={8}>
                  <Grid container>
                    <Grid item md={5} xs={12}  >
                      <MuiThemeProvider theme={theme}>
                        <TextField 
                       className={classes.margin}
                          value={enquiry.inputName}
                          label="Name *"
                          
                          variant="outlined"
                          id="custom-css-outlined-input"
                          onChange={(e) => handleChange("inputName", e.target.value)}
                        />
                      </MuiThemeProvider>
                      {isEmpty(enquiry.inputName) ? (
                        <Grid style={{ color: "red" }}>
                          {nameError}
                        </Grid>
                      ) : (
                          ""
                        )}
                    </Grid>
                    <Hidden mdDown>
                      <Grid item md={5} xs={12} style={{ marginLeft: "16%" }}>
                        <MuiThemeProvider theme={theme}>
                          <TextField
                            color="primary"
                            className={classes.margin}
                            value={enquiry.inputEmail}
                            label={<span style={{ color: "" }}>Email *</span>}
                            variant="outlined"
                            id="custom-css-outlined-input"
                            onChange={(e) => handleChange("inputEmail", e.target.value)}
                          />
                        </MuiThemeProvider>
                        {isEmpty(enquiry.inputEmail) ? (
                          <Grid style={{ color: "red" }}>
                            {emailError}
                          </Grid>
                        ) : (
                            ""
                          )}
                      </Grid>
                    </Hidden>
                    <Hidden mdUp>
                      <Grid item md={5} xs={12} >
                        <MuiThemeProvider theme={theme}>
                          <TextField
                            value={enquiry.inputEmail}
                            className={classes.margin}
                            label={<span style={{ color: "" }}>Email *</span>}
                            variant="outlined"
                            id="custom-css-outlined-input"
                            onChange={(e) => handleChange("inputEmail", e.target.value)}
                          />
                        </MuiThemeProvider>
                        {isEmpty(enquiry.inputEmail) ? (
                          <Grid style={{ color: "red" }}>
                            {emailError}
                          </Grid>
                        ) : (
                            ""
                          )}
                      </Grid>
                    </Hidden>
                    <Grid item md={12} xs={12}>
                      <MuiThemeProvider theme={theme}>
                        <TextField
                          value={enquiry.inputSubject}
                          className={classes.margin}
                          label={<span style={{ color: "" }}>Subject *</span>}
                          variant="outlined"
                          id="custom-css-outlined-input"
                          onChange={(e) => handleChange("inputSubject", e.target.value)}
                        />
                      </MuiThemeProvider>
                      {isEmpty(enquiry.inputSubject) ? (
                        <Grid style={{ color: "red" }}>
                          {subjectError}
                        </Grid>
                      ) : (
                          ""
                        )}
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <MuiThemeProvider theme={theme}>
                        <TextField
                          value={enquiry.inputAdditional_info}
                          multiline
                          className={classes.margin}
                          label={<span style={{ color: "" }}>Type your text here *</span>}
                          variant="outlined"
                          id="custom-css-outlined-input"
                          onChange={(e) => handleChange("inputAdditional_info", e.target.value)}
                        />
                      </MuiThemeProvider>
                      {isEmpty(enquiry.inputAdditional_info) ? (
                        <Grid style={{ color: "red" }}>
                          {additionalInfoError}

                        </Grid>
                      ) : (
                          ""
                        )}
                    </Grid>
                  </Grid>
                </Grid>
                <Hidden mdDown>
                  <Grid item md={2}></Grid>
                </Hidden>
              </Grid>
              <Grid align="center">
                <Button variant="outlined" color="grey" style={{ marginBottom: "2%", marginTop: "1%" }} onClick={() => this.OnClickSubmit()}>
                  Submit</Button>
              </Grid>
              <Divider display="none" style={{ background: "#ffdae9", boxShadow: "0px 0px 10px #d81b60", marginBottom: "2%" }} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = ({ app }) => {
  const { appName, enquiry = {},snackbar,nameError,emailError,subjectError,additionalInfoError } = app
  return {
    appName,
    enquiry,
    snackbar,
    nameError,
    emailError,
    subjectError,
    additionalInfoError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setStatesFromResponse: (attribute, val) => dispatch(setStatesFromResponse(attribute, val))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Feature)))