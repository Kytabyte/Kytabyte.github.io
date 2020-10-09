import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home'
import Project from './components/Project';

const makeurl = (url: string) => {
  return process.env.PUBLIC_URL + url;
}


class App extends React.Component<object, object> {
  componentDidMount() {
    document.title = "Kytabyte's Home";
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path={makeurl("/")} component={Home} />
          <Route path={makeurl("/blog")} component={Blog} />
          <Route path={makeurl("/project")} component={Project} />
        </Switch>
      </>
    );
  }
}

export default App;
