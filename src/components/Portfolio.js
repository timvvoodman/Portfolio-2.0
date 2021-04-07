import React from 'react'
import PoG from '../assets/PlotsofGold.png'
import CodeQuiz from '../assets/Coding Quiz.png'
import HikerHelper from '../assets/Hiker Helper.png'
import Scheduler from '../assets/WorkDayScheduler.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

const Portfolio = () => {
  //Plot of Gold//
  const openPopupboxPog = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={PoG}
          alt="Plot of Gold"
        ></img>
        <p>Garden planner for beginners. Built with the MERN stack.</p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/timvvoodman/Plot-Of-Gold')
          }
        >
          Here
        </a>
        <br></br>
        <b>Deployed Project: </b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://plotofgold.herokuapp.com/')}
        >
          Here
        </a>
      </>
    )

    PopupboxManager.open({ content })
  }

  const popupboxConfigPog = {
    titleBar: {
      enable: true,
      text: 'Plot of Gold',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  //Code Quiz//
  const openPopupboxCodeQuiz = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={CodeQuiz}
          alt="Code Quiz"
        ></img>
        <p>
          Short multiple choice quiz on a timer that shows and saves high
          scores. An early project I buit using vanilla JavaScript.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/timvvoodman/Coding-Quiz')
          }
        >
          Here
        </a>
        <br></br>
        <b>Deployed Project: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://timvvoodman.github.io/Coding-Quiz/')
          }
        >
          Here
        </a>
      </>
    )

    PopupboxManager.open({ content })
  }

  const popupboxConfigCodeQuiz = {
    titleBar: {
      enable: true,
      text: 'Code Quiz',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  //Hiker Helper//
  const openPopupboxHikerHelper = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={HikerHelper}
          alt="Hiker Helper"
        ></img>
        <p>
          Tool for travelers looking to find a new trail to hike. Built using
          jQuery, the Open Weather API, and the Hiking Project API.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/timvvoodman/HikerHelper')
          }
        >
          Here
        </a>
        <br></br>
        <b>Deployed Project: </b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://eddiephi.github.io/HikerHelper/')}
        >
          Here
        </a>
      </>
    )

    PopupboxManager.open({ content })
  }

  const popupboxConfigHikerHelper = {
    titleBar: {
      enable: true,
      text: 'Hiker Helper',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  //Work Day Scheduler//
  const openPopupboxScheduler = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={Scheduler}
          alt="Work Day Scheduler"
        ></img>
        <p>
          Work Day Scheduler built using jQuery, moment.js, and utilizing local
          storage.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/timvvoodman/Day-Planner')
          }
        >
          Here
        </a>
        <br></br>
        <b>Deployed Project: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://timvvoodman.github.io/Day-Planner/')
          }
        >
          Here
        </a>
      </>
    )

    PopupboxManager.open({ content })
  }

  const popupboxConfigScheduler = {
    titleBar: {
      enable: true,
      text: 'Work Day Planner',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">My Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxPog}>
            <img className="portfolio-image" src={PoG} alt="plot of gold"></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCodeQuiz}>
            <img
              className="portfolio-image"
              src={CodeQuiz}
              alt="code Quiz"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxHikerHelper}
          >
            <img
              className="portfolio-image"
              src={HikerHelper}
              alt="Hiker Helper"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxScheduler}>
            <img
              className="portfolio-image"
              src={Scheduler}
              alt="Day Planner"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigPog} />
      <PopupboxContainer {...popupboxConfigCodeQuiz} />
      <PopupboxContainer {...popupboxConfigHikerHelper} />
      <PopupboxContainer {...popupboxConfigScheduler} />
    </div>
  )
}

export default Portfolio
