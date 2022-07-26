import React from "react";
import me from "../assets/me.jpg";
import Socials from './Socials'

function About() {
  return (
    <div id="about">
      <img className="img" src={me} />

      <div className="desc">
        <h2 className="name">Hornik Taras</h2>
        <small className="job">Frontend Developer</small>
        <p className="site">volynhistory.c1.biz</p>
        <div className="links">
          <a className="email" href="mailto:tarasgorniko@gmail.com">
            <i className="fa-solid fa-envelope"></i> Email
          </a>
          <a className="linkedin" href="linkedin.com">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>

        <div className="text">
          <h3>About</h3>
          <p className="about-text">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>

          <h3>Interests</h3>
          <p className="interests">
            Love learn smth new. Swimmer. Travel geek. Games fanatic. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>

      {/* Social Media */}
      <Socials />
    </div>
  );
}

export default About;
