import React from 'react'
import Typed from 'react-typed'

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Full Stack Developer</h1>
        <Typed
          className="typed-text"
          strings={[
            'MongoDB',
            'Express.js',
            'React',
            'Node.js',
            'SQL',
            'MVC Design',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Header
