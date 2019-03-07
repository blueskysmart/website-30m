import React, { Component } from 'react';
import designer_avartar from './assets/images/designer_avatar.png';
import photo1 from './assets/images/photo1.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="logo">
            <div className="logo-container">
              <div className="image-container">
                <img src={designer_avartar}/></div>
              <div className="logo-label">
                <span className="name">Lewis</span>
                <span className="name">Nathaniel</span>
                <span className="title">UI & Ux Designer</span>
              </div>
            </div>
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#">Work</a></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <a className="button button-white" href="#">Hire Me</a>
          </nav>
        </header>
        <section className="profile">
          <div className="profile-left">
            <div className="intro">
              <span className="hello">Hello I'm</span>
              <span className="name">Cuong Nguyen</span>
              <span className="title">Software Engineer</span>
            </div>
            <div className="socialButton">
              <ul>
                <li><a href="#" className="facebook">facebook</a></li>
                <li><a href="#" className="google">google</a></li>
              </ul>
            </div>
            <div className="cta">
              <a className="button button-black" href="#">Hire Me</a>
              <a className="button button-gray" href="#">See My Resume</a>
            </div>
          </div>
          <div className="profile-right">
            <div className="image-container">
              <img src={photo1}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
