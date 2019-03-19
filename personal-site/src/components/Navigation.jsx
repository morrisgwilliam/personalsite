import React from "react";
import logo from "../Images/logo_100.jpg";
import resumeW from "../Files/William_Morris.docx";
import resumePDF from "../Files/William_Morris.pdf";

const Navigation = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm pt-3 pb-5">
       <img
          className="d-inline"
          src={logo}
          height="150px"
          width="150px"
          alt="Logo"
        />

       </div>
      
      <div className="col-sm d-flex justify-content-end pb-5 pt-3 px-0">
        <span className="nav-btn">
          <a
            rel="noopener noreferrer"
            className="btn-large waves-effect"
            target="_blank"
            href="https://www.github.com/morrisgwilliam"
          >
            <i className="fab fa-github fa-3x" />
          </a>
        </span>
        <span className="nav-btn">
          <a
            rel="noopener noreferrer"
            className="btn-large waves-effect"
            target="_blank"
            href="https://www.linkedin.com/in/william-morris-77323913b/"
          >
            <i className="fab fa-linkedin-in fa-3x" />
          </a>
        </span>
        <span className="nav-btn">
          <a className="btn-large waves-effect" download href={resumeW}>
            <i className="fas fa-file-word fa-3x " /> Resume
          </a>
        </span>
        <span className="nav-btn">
          <a className="btn-large waves-effect" download href={resumePDF}>
            <i className="fas fa-file-pdf fa-3x" /> Resume
          </a>
        </span>
      </div>
      </div>
    <div className="container">{props.children}</div>
  </div>
);

export default Navigation;
