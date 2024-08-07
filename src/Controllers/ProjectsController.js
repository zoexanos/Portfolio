import React from 'react';
import '../scss/Projects.scss';
import doubleC from './../imgFolder/double_c.png';
import knightQ from './../imgFolder/knight_quest.png';
import * as AiIcons from 'react-icons/ai';
import * as DiIcons from 'react-icons/di';

class ProjectsController extends React.Component {
  render(){
    return(
      <div id="projects">
        <div className="projects-wrapper">
          <div className="project-card">
            <div className="img-card" id="card-1">
              {/* <p><img src={doubleC} alt="doublC"></img></p> */}
              <div className="text-hover">
                <p className="p-text-hover">
                  <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="link-class" /></a>
                  <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="link-class" /></a>
                  <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="link-class" /></a></p>
                </div>
            </div>
          </div>
          <div className="project-card" id="card-2">
            <div className="text-card">
              <h2>Double Cryptography</h2>
              <div className='button-div'><button className='lang-tag'>ruby on rails</button><button className='lang-tag'>react.js</button></div>
              <p><img className='desc-image' src={doubleC} alt="doublC"></img></p>
              {/* <p>I created a browser-based game using Ruby on Rails for the back end and React for the front end. Users can log in to solve interactive puzzles with the help of a detective.</p>
              <p>For this project, I designed and wrote front end using React and React-konva. I implemented RESTful API to manage game state and persist game data. I also created all game graphics through Figma and used GSAP to manage animations
</p>
              
              <div className="mobile-text" >
                <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="mobile-link" /></a>
                <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="mobile-link" /></a>
                <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="mobile-link" /></a>
              </div> */}
            </div>
          </div>
          <div className="project-card" id="card-3">
            <div className="text-card">
              <h2>Knight Quest</h2>
              <h3>Ruby on Rails</h3>
              <p>This was a paired project CLI game created using Ruby on Rails and SQL. Users can choose a knight to journey with or create a new one. Using a classic quest game aesthetic and style, users can progress through the game and solve puzzles with their knight of choice.</p>
              <p>The major goal of this project was to push what we knew code can do as well as explore our creative side.</p>
              <p className="mobile-text">
                <a href="https://youtu.be/fnro7p4HKyM"><AiIcons.AiOutlinePlayCircle className="mobile-link" /></a> <a href="https://github.com/zoexanos/Knight-Quest"> <AiIcons.AiFillGithub className="mobile-link" /></a>
                </p>
            </div>
          </div>
          <div className="project-card"id="card-4">
            <div className="img-card">
            <p><img src={knightQ} alt="knightQ"></img></p>
              <div className="text-hover">
                <p className="p-text-hover">
                <a href="https://youtu.be/fnro7p4HKyM"><AiIcons.AiOutlinePlayCircle className="link-class" /></a> <a href="https://github.com/zoexanos/Knight-Quest"> <AiIcons.AiFillGithub className="link-class" /></a>
                </p>
              </div>
            </div>
          </div>
          {/* This is input for the next project */}
          {/* <div className="project-card"id="card-6">
            <div className="img-card">
              <p> image here</p>
            </div>
          </div>
          <div className="project-card" id="card-5">
            <div className="text-card">
              <h2>3</h2>
              <p>card 3</p>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default ProjectsController;