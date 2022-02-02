import React from "react";
import ReactTooltip from "react-tooltip";
import GoodDog from "../Images/GoodDog.gif";
import AddiHacks from "../Images/AddiHacks.png";
import MSSQL from "../Images/MSSQL.png";
import CSharp from "../Images/C#.png";
import ASP from "../Images/ASP.png";
import CertSA from "../Images/cert-aws-sa.png";
import CertDev from "../Images/cert-aws-dev.png";

const BioSection = props => (
  <div className="container-fluid px-0">
    <div className="row pt-5">
      <div className="col-12 px-0">
        <div className="slantedDivBlue p-3">
          <div className="col-9 p-3 mt-3 mx-auto bio">
            <h4 className="text-center playfair">
              {" "}
              Hello, my name is William.
            </h4>
            <p className="text-center">
              {" "}
              I graduated from Cal Poly Pomona, home of the Broncos, in 2017
              with a B.S. in Biotechnology and a minor in Chemistry. I have
              worked in academic settings conducting research on new vaccine
              formulations at the{" "}
              <a
                className="blue-wm"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=EYKszXgpFLE"
              >
                Adler Lab
              </a>{" "}
              and mitochondrial dynamics at the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="blue-wm"
                href="http://chanlab.caltech.edu/research"
              >
                Chan Lab
              </a>
              . In 2018, I furthered my education by learning web development
              and have since worked as a full stack web developer.
            </p>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto roles-container">
        <div className="row text-center mb-0">
          <div className="col-12 px-1 py-5">
            <i className="fas fa-code fa-3x purple-text-wm" />
            <h4>Full Stack Developer</h4>
            <p>
              I like to create fully functional applications. This means coding
              both backend and frontend structure to create dynamic content!
            </p>
            <br />
            <div className="row text-center">
              <div className="col-3"></div>
              <div className="col-3">
              <a href="https://aws.amazon.com/certification/certified-developer-associate/" rel="noopener noreferrer" target="_blank">
              <img
              style={{maxWidth: `300px`}}
              className="img-fluid zoom"
              src={CertSA}
              alt="AWS Solutions Architect Associate Certification"
              />
              </a>
              </div>
              <div className="col-3">
              <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" rel="noopener noreferrer" target="_blank">
              <img
              style={{maxWidth: `300px`}}
                className="img-fluid zoom"
                src={CertDev}
                alt="AWS Developer Associate Certification"
              />
              </a>
              </div>
              <div className="col-3"></div>
            </div>
            <p className="purple-text-wm mt-5">Technology and Langauges:</p>
            <p>
              ReactJS, dotnet Web Api, SQL, AWS, CSS, and
              more.
            </p>
            <br />
            <p className="purple-text-wm">More Dev Tools:</p>
            <p>VS Code</p>
            <p>VS Studio</p>
            <p>GitHub</p>
            <p>MSSQL</p>
            <div className="d-flex col-8 pt-3 mx-auto justify-content-around">
              <i data-tip data-for="react" className="fab fa-react fa-3x" />
              <ReactTooltip id="react" effect="solid">
                <span>React JS</span>
              </ReactTooltip>
              <i
                data-tip
                data-for="js"
                className="fab fa-js-square fa-3x mx-2"
              />
              <ReactTooltip id="js" effect="solid">
                <span>Javascript</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="CSharp"
                className="wm-icon mx-1"
                src={CSharp}
                alt="C Sharp"
              />
              <ReactTooltip id="CSharp" effect="solid">
                <span>C#</span>
              </ReactTooltip>
              <img
                alt="ASP.NET Web Api"
                data-tip
                data-for="ASP"
                className="wm-icon mx-1"
                src={ASP}
              />
              <ReactTooltip id="ASP" effect="solid">
                <span>ASP.NET Web Api</span>
              </ReactTooltip>
              <img
                alt="Microsoft SQL Server"
                data-tip
                data-for="MSSQL"
                className="wm-icon mx-1"
                src={MSSQL}
              />
              <ReactTooltip id="MSSQL" effect="solid">
                <span>Microsoft Server SQL</span>
              </ReactTooltip>
            </div>
          </div>
          <div className="col-12 px-1 py-5">
            <i
              className="fa fa-location-arrow fa-3x purple-text-wm"
              aria-hidden="true"
            />
            <h4>Based in Los Angeles, Ca.</h4>
            <p>You can reach me at (909) 548-1515.</p>
            <p>
              Or send me an email at{" "}
              <a href="mailto:contact@morrisgwilliam.com?subject=Let's Talk">
                contact@morrisgwilliam.com
              </a>
            </p>
            <br />
            <img
              src={AddiHacks}
              alt="AddiHacks 2nd Place"
              className="img-fluid rounded"
            />
            <p className="mt-3">
              Second Place Winners at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://thehackathon.us/"
              >
                AddiHacks 2019
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto mb-5">
        <div className="row text-center">
          <div className="col pt-5">
            <h1 className="emphasize theme-purple">
              Check out some of my recent projects.
            </h1>
            <p>
              You can check out my code samples including ReactJS components,
              ASP.NET Controllers and SQL stored procedures{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/morrisgwilliam/Code_Samples"
              >
                here
              </a>{" "}
              if you would like to see more.{" "}
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-s p-3">
            <img src={GoodDog} alt="Good Dog Gif" className="img-fluid" />
          </div>
          <div className="col p-3">
            <div style={{ borderBottom: "1px solid #9f30fa" }}>
              <h4 className="theme-purple mb-0">Good Dog</h4>
            </div>
            <p>
              A startup based in Los Angeles that wants you to be the best dog
              owner possible. GoodDog is a platform that incentivizes you to
              make activity with your dog a fun habit. Let's start with a walk!
            </p>

            <h5
              className="theme-purple
         "
            >
              Technologies
            </h5>
            <div className="d-flex pt-3 justify-content-around">
              <i data-tip data-for="react" className="fab fa-react fa-3x" />
              <ReactTooltip id="react" effect="solid">
                <span>React JS</span>
              </ReactTooltip>
              <i
                data-tip
                data-for="js"
                className="fab fa-js-square fa-3x mx-2"
              />
              <ReactTooltip id="js" effect="solid">
                <span>Javascript</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="CSharp"
                className="wm-icon mx-1"
                src={CSharp}
                alt="C Sharp"
              />
              <ReactTooltip id="CSharp" effect="solid">
                <span>C#</span>
              </ReactTooltip>
              <img
                alt="ASP.NET Web Api"
                data-tip
                data-for="ASP"
                className="wm-icon mx-1"
                src={ASP}
              />
              <ReactTooltip id="ASP" effect="solid">
                <span>ASP.NET Web Api</span>
              </ReactTooltip>
              <img
                alt="Microsoft SQL Server"
                data-tip
                data-for="MSSQL"
                className="wm-icon mx-1"
                src={MSSQL}
              />
              <ReactTooltip id="MSSQL" effect="solid">
                <span>Microsoft Server SQL</span>
              </ReactTooltip>
            </div>
            <h5
              className="theme-purple
         "
            >
              Role
            </h5>
            <p>
              I worked as a full stack developer on this project for 4 months.
              During this time I integrated several features including user
              authentication, routing and mapping components, Google API for
              external log in, Weather API for weather data based on user
              location, Send Grid API for automated email services and more!
            </p>
            <h5
              className="theme-purple
         "
            >
              Check It Out
            </h5>
            <p>
              You can check out the live project by clicking{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gooddog.azurewebsites.net"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="row footer mb-0 p-3">
      <div className="start-chat col-10 text-center mx-auto p-3 theme-white align-middle">
        <div className="col-xs-3 p-3">
          <h3 className="d-inline">Let's Start A Project</h3>
        </div>
        <div className="col-xs-3 p-3">
          <p className="d-inline">
            Have a project in mind? Let's bring it to life together! Send me an
            email and we can set up a time to talk.
          </p>
        </div>
        <div className="col-xs-3 p-3">
          <span className="nav-btn">
            <a
              className="btn-large waves-effect"
              href="mailto:morrisgwilliam@gmail.com?subject=Let's Start A Project"
            >
              <p>Let's get started!</p>
            </a>
          </span>
        </div>
      </div>
      {/* <div className="col-10 mt-3 p-3 align-middle mx-auto text-center">
        <h4>Striving to be better everyday.</h4>
      </div> */}
    </div>
  </div>
);

export default BioSection;
