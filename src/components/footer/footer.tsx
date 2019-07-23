import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}));

function Footer() {
  const classes = useStyles();

  return(
    <footer className={classes.footer}>
      <Divider variant ="fullWidth" />
      <Typography variant="h6" align="center" gutterBottom>
        Impressum
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        Kaiser Shad | Eisenacher Str. 74 | 10823 Berlin
      </Typography>
    </footer>
  );
}

export default Footer;