import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import Button from "@material-ui/core/Button";
import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";

export interface AppProps {
}

class App extends React.Component<AppProps, undefined> {
    render() {
      return (
        <>
          <Header />
          <Body>
            <h1>CUSTOM SOFTWARE DEVELOPMENT</h1>
            <p>Kaiser Shad - JavaScript Developer</p>
            <Button variant="contained" color="primary">
              Contact
            </Button>
          </Body>
          <Footer />
        </>
        );
    }
}

declare let module: Object;

export default hot(module)(App);