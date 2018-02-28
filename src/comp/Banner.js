import React from "react"
import video from '../img/amtax.mp4'
import Circle from './Circle.js'
import global from '../img/global.png'
import date from '../img/date.png'

export default () => (
<div id="banner">

  <div id="video-layer">
    <video autoPlay loop id="bg-video">
      <source src={video} type="video/mp4"/>
    </video>
  </div>

  <div id="bg-layer"></div>

  <div id="circle-title">
    <Circle 
      backgroundColor="rgba(73, 85, 129, 0.5)" 
      width="58vw"
    />
    <div className="header-wrapper">
      <header>
        <h1>16-18 MAY 2018</h1>
        <h2>Tax Trends Today</h2>
      </header>
    </div>
  </div>

  <div id="circle-logo">
    <Circle 
        backgroundColor="rgba(2, 26, 59, 0.6)" 
        width="30vw"/>
      <div className="header-wrapper">
        <header>
          <img src={global} alt="Global Conf" />
        </header>
      </div>
  </div>

  <div id="circle-date">
    <Circle 
        backgroundColor="rgba(170, 182, 71, 0.6)" 
        width="15vw"/>
      <div className="header-wrapper">
        <header>
          <img src={date} alt="date"/>
        </header>
      </div>
  </div>

  <style jsx>{`
    #banner{
      position: relative;
      width: 100%;
      padding-top: 3em;
    }

    #bg-layer {
      position: absolute;
      top: 0;
      bottom: 5px;
      right: 0;
      left: 0;
      background-color: rgba(19, 40, 69, 0.6);
    }

    #bg-video {
      width: 100%;
      height: 100%;
    }

    #circle-title {
      position: absolute;
      left: -10%;
      bottom: 5px;
      height: 536px;
      overflow: hidden;
    }
    .header-wrapper{
      color:white;
    }
    #circle-title .header-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #circle-title header {
      text-align: center;
    }

    #circle-title header h1 {
      font-size: 36px;
    }

    #circle-title header h2 {
      font-size: 30px;
    }

    #circle-logo {
      position: absolute;
      right: 12%;
      top: 29%;
    }


    #circle-logo .header-wrapper {
      position: absolute;
      top: 0;
      right: 10px;
      left:0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #circle-logo header {
      text-align: center;
    }
    
    #circle-date {
      position: absolute;
      right: 9%;
      top: 26%;
    }


    #circle-date .header-wrapper {
      position: absolute;
      top: 0;
      right: 10px;
      left:0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #circle-date header {
      text-align: center;
    }
  `}</style>
</div>
)