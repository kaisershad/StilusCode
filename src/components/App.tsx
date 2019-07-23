import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import Button from "@material-ui/core/Button";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

class App extends React.Component<AppProps, undefined> {
    render() {
      return (
        <div className="app">
          <h1>StilusCode</h1>
          <p>powered by Kaiser</p>
          <Button variant="contained" color="primary">
            Material UI Button
          </Button>
        </div>
        );
    }
}

declare let module: Object;

export default hot(module)(App);