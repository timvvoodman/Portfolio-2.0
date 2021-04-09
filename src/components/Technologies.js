import React from 'react'
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faSchool } from '@fortawesome/free-solid-svg-icons'

const Technologies = () => {
  return (
    <div id="technical-skills" className="technologies">
      <h1 className="py-5"> Technical Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
              </div>
              <h3>React</h3>
              <p>
                Experience with both class based and modern, Hook based
                framework.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDatabase} size="2x" />
              </div>
              <h3>Database Design</h3>
              <p>
                Completed Projects using both MongoDB and MySQL Database
                structures.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faNodeJs} size="2x" />
              </div>
              <h3>Node.js</h3>
              <p>
                Project backend developed using node.js with Express.js routing.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faSchool} size="2x" />
              </div>
              <h3>...And Learning</h3>
              <p>
                I am constanly digging into additional development technologies!
              </p>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>
  )
}

export default Technologies
