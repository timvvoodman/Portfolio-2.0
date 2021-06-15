/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PoG from '../assets/PlotsofGold.png'
import Bamazon from '../assets/Bamazon.PNG'
import ReadingList from '../assets/BookSearch.png'
import WhatToWatch from '../assets/MovieSearch.png'
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

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Plot of Gold',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    })
  }

  //Code Quiz//
  const openPopupboxBamazon = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={Bamazon}
          alt="Bamazon"
        ></img>
        <p>
          Full Stack ecommerce Amazon clone with cart, checkout, payment, and
          order history.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://github.com/timvvoodman/Bamazon')}
        >
          Here
        </a>
        <br></br>
        <b>Deployed Project: </b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://b-15da6.web.app/')}
        >
          Here
        </a>
      </>
    )

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Bamazon',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    })
  }

  //Reading List//
  const openPopupboxReadingList = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={ReadingList}
          alt="Reading List App"
        ></img>
        <p>
          Search the extensive Google Books Library and Save your favorites to a
          Reading List which is saved in the database. Remove Books once you've
          read them
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/timvvoodman/Google-Books-Search')
          }
        >
          Here
        </a>
        <br></br>
        <b>Deployed Project: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://tw-google-books-list.herokuapp.com/')
          }
        >
          Here
        </a>
      </>
    )

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Reading List',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    })
  }

  //What to Watch?//
  const openPopupboxWhatToWatch = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={WhatToWatch}
          alt="What to Watch App"
        ></img>
        <p>
          Search by movie title and find overviews and ratings from the most
          popular results. Made using movieDB API, JavaScript, and AJAX.
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/timvvoodman/Movie-Rating-Search')
          }
        >
          Here
        </a>
        <br></br>
        <b>Deployed Project: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://timvvoodman.github.io/Movie-Rating-Search/')
          }
        >
          Here
        </a>
      </>
    )

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Movie Search',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    })
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">My Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxPog}>
            <img className="portfolio-image" src={PoG} alt="plot of gold"></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxBamazon}>
            <img
              className="portfolio-image"
              src={Bamazon}
              alt="code Quiz"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxReadingList}
          >
            <img
              className="portfolio-image"
              src={ReadingList}
              alt="Reading List App"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxWhatToWatch}
          >
            <img
              className="portfolio-image"
              src={WhatToWatch}
              alt="What to Watch App"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* - */}
        </div>
      </div>
      <PopupboxContainer />
      <PopupboxContainer />
      <PopupboxContainer />
      <PopupboxContainer />
    </div>
  )
}

export default Portfolio
