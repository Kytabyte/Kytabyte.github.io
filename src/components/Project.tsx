import React from "react";

import Topbar from "./Topbar";

class Project extends React.Component<object, object> {
  componentDidMount() {
    document.title = "Kytabyte's Project";
  }

  render() {
    return (
      <div>
        <Topbar />
        <h1>
            Welcome to my projects!
        </h1>
        <br />
        <p style={{textAlign: "center"}}>Unfortunately, I haven't summary up any project here...</p>
      </div>
   );
  }
}

export default Project;