import React from "react";

import Topbar from "./Topbar";
import Timeline from "./Timeline"

class Home extends React.Component<object, object> {
  componentDidMount() {
    document.title = "Kytabyte's Home";
  }

  render() {
    return (
      <div>
        <Topbar />
        <div>
          <h1>
              Welcome to my page!
          </h1>
          <br />
          <p style={{textAlign: "center"}}>
            Hello, My name is Kyle Xie, I am currently a software engineer at Google.
          </p>
          <Timeline />
        </div>
      </div>
   );
  }
}

export default Home;