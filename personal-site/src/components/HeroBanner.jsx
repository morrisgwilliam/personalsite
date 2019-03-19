import React from "react";
import HeroAnimation from "./HeroAnimation";

const HeroBanner = props => (
  <>
    <div className="row hero-developer">
      <div className="col-12" align="center">
        <h1 className="emphasize">.Net Full Stack Web Developer</h1>
        <h5>Creating innovative web appications.</h5>
      </div>
    </div>
    <div className="row pt-3">
      <div className="col-12" align="center">
        <div className="profile-pic" />
        <div className="col-10 pt-5" align="center">
          <HeroAnimation {...props} />
        </div>
      </div>
    </div>
  </>
);

export default HeroBanner;
