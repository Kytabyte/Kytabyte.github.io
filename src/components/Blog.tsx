import React from "react";
import { Container } from "react-bootstrap";

import Topbar from "./Topbar";

class Blog extends React.Component<object, object> {
  render() {
    return (
      <div>
        <Topbar />
        <br />
          <Container className="justify-content-md-center">
            <h1>
                Welcome to my blog!
            </h1>
          </Container>
      </div>
   );
  }
}

export default Blog;