import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)


class App extends Component {
  getComponents = (route, index) => (
    <Route key={index} exact={route.isExact} path={route.path} render={props => (<route.component {...props} />)} />
  )
  render() {
    return (
      <>
     <Switch>
      <Navigation {...this.props}/>
     </Switch>
     </>
    );
  }
}

export default withRouter(App);
