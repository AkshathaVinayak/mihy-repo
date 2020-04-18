import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  space: {
    margin: theme.spacing(1,0)
  },
  label:{
    color: '#d81b60'
  }
}));

const FAQQuestions = ({ questionsList = [], t }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h6" color="primary">
          { t('About US') }
      </Typography>
        </Grid>
      <Grid container direction="column" justify="center" alignItems="stretch">
        {questionsList.map((questions, key) => {
          return (
            <Grid item key={key}>
              <Card className={classes.space}>
                <CardContent>
                 <label className={classes.label}>{questions.question}</label> <br/>
                 {questions.answer}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default FAQQuestions;
