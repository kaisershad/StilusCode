import * as React from "react";
import Container from "@material-ui/core/Container";

interface BodyProps {
  children: any;
}

function Body(props: BodyProps) {
  return (
    <Container maxWidth="lg">
      {props.children}
    </Container>
  );
}

export default Body;