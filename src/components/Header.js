/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Typed from 'react-typed'

function Header() {
  return (
    <div id="home" className="header-wrapper">
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
      </div>
    </div>
  )
}

export default Header
