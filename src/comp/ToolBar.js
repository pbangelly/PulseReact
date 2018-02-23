import React from "react"
import LogoImg from "../img/amLogo.png"
import Vector from "../img/vector.png"

export default () => (
  <div id="menu-bar" className="row">
    <div id="logo">
      <img src={LogoImg} alt="logo" />
    </div>

    <div className="row" id="vector">
      <img src={Vector} alt="AM Global" />
    </div>

    <ul className="row" id="list">
      <li>ABOUT</li>
      <li>WHO WE SERVE</li>
      <li>WHAT WE DO</li>
      <li>THOUGHT LEADERSHIP</li>
      <li>EVENTS</li>
      <li>OUR PARTNERS</li>
    </ul>
    <style jsx>{`
    #menu-bar{
      display:flex;
      width:100%;
      height:auto;
      justify-content: center;
      align-items: baseline;
    }
    #logo{
      padding:1%;
      margin-left:10%;
    }
    #vector{
      position: absolute;
      top:0;
      right: 2%;
      width:auto;
      }
      ul{	
        color: #3585b7;
        font-size: 18px;
        line-height: 15.518px;
        list-style: none;
        width:100%;
       } 
      li{
        margin-left:3%;
        display:inline;
        word-spacing: 1px;
      }
}
    `}
    </style>
  </div>
)