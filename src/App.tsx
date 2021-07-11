import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home'
import Project from './components/Project';

class App extends React.Component<object, object> {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
