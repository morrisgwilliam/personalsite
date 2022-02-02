import React from "react";
import logo from "../Images/logo_100.jpg";
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

      <div className="col d-flex justify-content-end pt-3 px-0">
        <span className="nav-btn px-1">
          <a
            rel="noopener noreferrer"
            className="btn-large waves-effect"
            target="_blank"
            href="https://www.github.com/morrisgwilliam"
            style={{ padding: "0px 16px" }}
          >
            <i className="fab fa-github fa-3x" />
          </a>
        </span>
        <span className="nav-btn px-1">
          <a
            rel="noopener noreferrer"
            className="btn-large waves-effect"
            target="_blank"
            href="https://www.linkedin.com/in/william-morris-77323913b/"
            style={{ padding: "0px 16px" }}
          >
            <i className="fab fa-linkedin-in fa-3x" />
          </a>
        </span>
        <span className="nav-btn px-1">
          <a
            className="btn-large waves-effect"
            download
            href={resumePDF}
            style={{ padding: "0px 16px" }}
          >
            <i className="fas fa-file-pdf fa-3x" /> Resume
          </a>
        </span>
      </div>
    </div>
    <div className="container">{props.children}</div>
  </div>
);

export default Navigation;
