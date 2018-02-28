import React from "react"
import LogoImg from "../img/amLogo.png"
import Vector from "../img/vector.png"

export default () => (
  <div id="menu-bar">
    <div className="container">

      <ul>
        <li>
          <img src={LogoImg} alt="logo" />
        </li>
        <li className="link first">ABOUT</li>
        <li className="link">WHO WE SERVE</li>
        <li className="link">WHAT WE DO</li>
        <li className="link">THOUGHT LEADERSHIP</li>
        <li className="link">EVENTS</li>
        <li className="link">OUR PARTNERS</li>
      </ul>

      <div id="vector">
        <img src={Vector} alt="AM Global" />
      </div>
    
  </div>
  <style jsx>{`
    #menu-bar {
      position: fixed;
      z-index: 100;
      background: white;
      width: 100%;
    }
    .container {
      max-width: 970px;
      margin: 0 auto;
      position: relative;
    }
    #vector{
      position: absolute;
      top:0;
      right: 0;
    }
    ul{	
      color: #3585b7;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 0px;
      line-height: 15.518px;
      list-style: none;
      width:100%;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-end;
      padding-top: 1em;
      padding-bottom: 1em;
    } 
    li.link {
      padding-bottom: 1.5em;
    }
    li.link.first {
      padding-left: 1em;
    }
    li.link:hover {
      cursor: pointer;
    }
  `}</style>
</div>
)