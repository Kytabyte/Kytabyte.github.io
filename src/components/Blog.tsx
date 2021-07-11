import React from "react";

import "../styles/Blog.css";
import Topbar from "./Topbar";


type BlogCoverType = {
  key: string;
  title: string;
  date: Date;
  desc?: string;
  image?: string;
}

const blogCoverEntry: BlogCoverType[] = [
  
]

class Blog extends React.Component<object, object> {
  componentDidMount() {
    document.title = "Kytabyte's Blog";
  }

  render() {
    let blogCount = blogCoverEntry.length;
    let blogCountRows = Math.ceil(blogCoverEntry.length/2);

    if (blogCount === 0) {
      return (
        <div>
          <Topbar />
          <h1>
              Welcome to my blog!
          </h1>
          <br />
          <div style={{textAlign: "center"}}>
            Sorry, I do not have any blog yet...
          </div>
        </div>
      )
    }

    return (
      <div>
        <Topbar />
        <h1>
            Welcome to my blog!
        </h1>
        <br />
        {Array.from(Array(blogCountRows).keys()).map((index) => {
          return (
            <div className="entry-row">
              <div className="entry-col">
                {blogCoverEntry[index*2].key}
              </div>
              {index*2+1 < blogCount &&
              <div className="entry-col">
                {blogCoverEntry[index*2+1].key}
              </div>
              }
            </div>
          )
        })}
      </div>
   );
  }
}

export default Blog;