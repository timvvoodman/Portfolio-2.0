import React from 'react'
import Headshot from '../assets/Prof Pic.jpg'

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="img-wrapper mb-5">
            <img className="profile-img" src={Headshot} alt="Me..."></img>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            I am a full stack web developer with experience leading
            award-winning teams. I Recently earned a certificate in full stack
            software development from the University of New Hampshire, in which
            I developed skills in HTML, CSS, Javascript, SQL and NoSQL
            Databases, Express.js, React, and node.js. I Developed strengths in
            team based software development methodologies, deadline management,
            and remote communications with a working team. In my projects I take
            pride in creating an intuitive, reliable, and impactful user
            experience. Thrilled for the chance to use this skill set
            professionally, to develop software to drive organizational success
            and improve user experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
