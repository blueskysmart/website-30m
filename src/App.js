import React, { Component } from 'react';
import designer_avartar from './assets/images/designer_avatar.png';
import photo1 from './assets/images/photo1.png';
import photo2 from './assets/images/photo2.png';

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
            <a className="button-white" href="#">Hire Me</a>
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
              <a className="button-black" href="#">Hire Me</a>
              <a className="button-gray" href="#">See My Resume</a>
            </div>
          </div>
          <div className="profile-right">
            <div className="image-container">
              <img src={photo1}/>
            </div>
          </div>
        </section>

        <section className="porfolio">
          <div className="category-container">
            <ul className="categories">
              <li className="category">All</li>
              <li className="category">App</li>
              <li className="category">Website</li>
              <li className="category">Interaction</li>
            </ul>
          </div>
          <div className="project-container">
            <ul className="project-list">
              <li className="project-item">
                <div className="project-image"></div>
                <div className="project-content">
                  <span className="project-category">Category</span>
                  <div className="project-summary">
                    <span className="project-title">Title</span>
                    <span className="project-year">2018</span>
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="project-image"></div>
                <div className="project-content">
                  <span className="project-category">Category</span>
                  <div className="project-summary">
                    <span className="project-title">Title</span>
                    <span className="project-year">2018</span>
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="project-image"></div>
                <div className="project-content">
                  <span className="project-category">Category</span>
                  <div className="project-summary">
                    <span className="project-title">Title</span>
                    <span className="project-year">2018</span>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="project-list">
              <li className="project-item">
                <div className="project-image"></div>
                <div className="project-content">
                  <span className="project-category">Category</span>
                  <div className="project-summary">
                    <span className="project-title">Title</span>
                    <span className="project-year">2018</span>
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="project-image"></div>
                <div className="project-content">
                  <span className="project-category">Category</span>
                  <div className="project-summary">
                    <span className="project-title">Title</span>
                    <span className="project-year">2018</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="button-container">
            <a className="button-bold" href="#">Load More Work</a>
          </div>
        </section>

        
        
        <section className="about-me">
          <div className="left">
            <div className="image-container">
              <img src={photo2}/>
            </div>
          </div>
          <div className="right">
            <div className="text-container">
              <span className="text-aboutme">About Me</span>
              <span className="text-whoami">Who Am I</span>
            </div>
            <div className="description">
              <p className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat est consequat eu. Quisque aliquet a ipsum nec tincidunt. Nulla vitae rhoncus leo. Praesent dui sapien, bibendum quis tempus dictum, auctor ac dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec at mauris porta, ullamcorper sem quis, lobortis sem. Donec sit amet aliquet dui, at varius est. Phasellus porttitor finibus neque vel vehicula. Duis in nulla egestas, dignissim elit at, imperdiet eros. Integer tristique posuere purus. Suspendisse placerat, quam vitae ullamcorper sollicitudin, dui ligula molestie massa, sit amet laoreet nibh ex vitae dui. Aenean laoreet pellentesque lacus, eget varius massa mattis quis. Nunc ultrices urna eu nunc lobortis pulvinar. Duis viverra, quam non imperdiet scelerisque, urna nunc consequat velit, in mollis erat nibh in libero.</p>
            </div>
            <div className="cta">
              <a className="button-black" href="#">Hire Me</a>
              <a className="button-gray" href="#">See My Resume</a>
            </div>
          </div>
        </section>

        <section className="quote">
          <div className="sentence">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat est consequat eu. Quisque aliquet a ipsum nec tincidunt. Nulla vitae rhoncus leo. Praesent dui sapien, bibendum quis tempus dictum.</p>
          </div>
          <div className="avatar">
            <div className="image-container">
              <img src={designer_avartar}/>
            </div>
            <span className="full-name">Edward M. Brooks</span>
            <span className="title">Marketing House</span>
            <ul className="rate">
              <li>star</li>
              <li>star</li>
              <li>star</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
