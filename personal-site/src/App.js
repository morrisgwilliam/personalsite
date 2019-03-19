import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroBanner from "./components/HeroBanner";
import BioSection from "./components/BioSection";

class App extends Component {
  getComponents = (route, index) => (
    <Route
      key={index}
      exact={route.isExact}
      path={route.path}
      render={props => <route.component {...props} />}
    />
  );
  render() {
    return (
      <>
        <Navigation {...this.props}>
          <Switch>
            <HeroBanner {...this.props} />
          </Switch>
        </Navigation>
        <BioSection {...this.props}/>
      </>
    );
  }
}

export default withRouter(App);
