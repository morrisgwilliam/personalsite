import React from 'react'
import ReactTooltip from 'react-tooltip'
import GoodDog from '../Images/GoodDog.gif'
import AddiHacks from '../Images/AddiHacks.png'

const BioSection = props => (
<div className="container-fluid px-0">
    <div className="row">
        <div className="col-12 px-0">
            <div className="slantedDivBlue p-3">
            <div className="col-9 pb-4 mx-auto">
            <h4 className="text-center playfair"> Hello, my name is William.</h4>
            <p className="text-center"> I graduated from Cal Poly Pomona home of the Broncos in 2017 with a B.S. in Biotechnology and a minor in Chemistry. 
            I have worked in academic settings conducting research on new vaccine formulations at the <a className="purple-wm" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=EYKszXgpFLE">Adler Lab</a> and mitochondrial dynamics at the {" "} 
             <a target="_blank" rel="noopener noreferrer" className="purple-wm" href="http://chanlab.caltech.edu/research">Chan Lab</a>. In 2018 I continued to learn web development and have since worked as a freelance full stack web developer.
            </p>
            </div>
            </div>
        </div>
        <div className="col-10 mx-auto roles-container">
        <div className="row text-center mb-0">
            <div className="col b-r px-3 py-5">
            <i className="fas fa-code fa-3x purple-text-wm"></i>
            <h4>Full Stack Developer</h4>
            <p>I like to create fully funcitonal applications. This means coding both backend and frontend structure to create dynamic content!</p>
            <br/>
            <p className="purple-text-wm">Technology and Langauges:</p>
            <p>ReactJS, ASP.NET Web Api, SQL, Azure DevOps, TFS, CSS, jQuery and more.</p>
            <br/>
            <p className="purple-text-wm">More Dev Tools:</p>
            <p>VS Code</p>
            <p>VS Studio</p>
            <p>GitHub</p>
            <p>MSSQL</p>
            </div>
            <div className="col px-3 py-5">
            <i className="fa fa-location-arrow fa-3x purple-text-wm" aria-hidden="true"></i>
            <h4>Based in Los Angeles, Ca.</h4>
            <p>You can reach me at (909) 548-1515.</p>
            <p>Or send me an email at <a href="emailto:morrisgwilliam@gmail.com">morrisgwilliam@gmail.com</a></p>
            <br />
<img src={AddiHacks} alt="AddiHacks 2nd Place" className="img-fluid rounded"/>
<p>Second Place Winners at <a target="_blank" rel="noopener noreferrer" href="https://thehackathon.us/">AddiHacks 2019</a>.</p>

            </div>
        </div>    
        </div>

        <div className="col-10 mx-auto">
        <div className="row text-center">
        <h1 className="emphasize theme-purple">Check out some of my recent projects.</h1>
        <p>You can check out my code samples including ReactJS components, ASP.NET Controllers and  SQL stored procedures <a target="_blank" rel="noopener noreferrer" href="https://github.com/morrisgwilliam/Code_Samples">here</a> if you would like to see more. </p>
        </div>
            <div className="row my-5">
            <div className="col p-3">
            <img src={GoodDog} alt="Good Dog Gif" className="img-fluid" />
            </div>
            <div className="col p-3">
            <div style={{borderBottom: "1px solid #9f30fa"}}>
            <h4 className="theme-purple mb-0">Good Dog</h4>
            </div>
            <p>Our platform incentivizes you to make activity with your dog a fun habit. Let's start with a walk!</p>
        
            <p className="theme-purple ">Technologies</p>
            <i data-tip data-for="react" className="fab fa-react fa-3x"></i>
            <ReactTooltip id='react' effect="solid" >
  <span>React JS</span>
</ReactTooltip>
            <i data-tip data-for="js" className="fab fa-js-square fa-3x mx-2"></i>
            <ReactTooltip id='js' effect="solid" >
  <span>Javascript</span>
</ReactTooltip>
            <i className="fab fa-js-square fa-3x mx-2"></i>
            </div>
            </div>
        </div>
    </div>
</div>
)

export default BioSection;