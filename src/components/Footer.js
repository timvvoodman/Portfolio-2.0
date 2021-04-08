import React from 'react'
import MyResume from '../assets/Full Stack Software Engineer _ Timothy Woodman.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/timothyrwoodman2baa204a/">
          {/* <i className="fa fa-linkedin fa-2x footerImage"></i> */}
          <FontAwesomeIcon
            icon={faLinkedin}
            className="footerImage"
          ></FontAwesomeIcon>
        </a>

        <a href="https://github.com/timvvoodman">
          {/* <i className="fa fa-github fa-2x footerImage" aria-hidden="true"></i> */}
          <FontAwesomeIcon
            icon={faGithub}
            className="footerImage"
          ></FontAwesomeIcon>
        </a>

        <a href="https://twitter.com/Wo0dy2shoes">
          <FontAwesomeIcon
            icon={faTwitter}
            className="footerImage"
          ></FontAwesomeIcon>
        </a>
        <a href={MyResume}>
          <FontAwesomeIcon
            icon={faFilePdf}
            className="footerImage"
          ></FontAwesomeIcon>
        </a>
      </footer>
    </>
  )
}

export default Footer
