import React from "react";
import HeroAnimation from "./HeroAnimation";
import Expand from "react-expand-animated";

class HeroBanner extends React.PureComponent {
  state = { open: false };

  componentDidMount() {
    setTimeout(this.toggle, 4000);
  }

  toggle = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const transitions = ["height", "opacity"];
    return (
      <>
        <div className="row">
          <Expand
            className="mx-auto"
            open={this.state.open}
            duration={1000}
            transitions={transitions}
          >
            <div className="col-12" align="center">
              <h1 className="emphasize pt-3">Full Stack Web Developer</h1>
              <h5 className="pb-3">Creating innovative web appications.</h5>
              <div className="profile-pic" />
            </div>
          </Expand>
        </div>
        <div className="row">
          <div className="col-12" align="center">
            <div className="col-10 pt-5" align="center">
              <HeroAnimation {...this.props} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HeroBanner;
