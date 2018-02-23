import React from "react"
import video from '../img/amtax.mp4'
import circle from '../img/circle.png'
import Shape from './CircleMsg/Shape.js'

export default () => (
<div id="banner">
  <div id="second-layer">
    <source src={circle} alt="circle layer"/>
  </div>

  <Shape 
  backgroundColor="pink" 
  fontSize="10px" 
  headerFontSize="20px"
  title="Hello World" 
  content="do you like the or day?, weekend or week day?" 
  />

  <div id="trend">
    <h5>16-18 MAY 2018</h5>
    <span>| Tax Trends Today</span>
  </div>

  <div id="first-layer">
    <video autoPlay muted loop id="myVideo">
    <source src={video} type="video/mp4"/>
    </video>
  </div>
  <style jsx>{`
    #banner{
      width:100%;
      height:auto;
    }
    #trend {
      position: absolute;
      width: 100%;
      color: #ffffff;
      font-size: 36px;
      word-spacing: 1px;
      z-index: 1;
    }
    #trend span{
      font-size:20px;
    }
    #myVideo {
        position: static;
        right: 0;
        top:0px;
        bottom: 0;
        width: 100%;
        height:auto;
        z-index: -1;
    }
    #second-layer{
      position: absolute;
      right: 0;
      top:0;
      bottom: 0;
      width: 100%;
      height:auto;
      z-index: 2;
    }
  `}
  </style>
</div>
)