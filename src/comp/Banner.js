import React from "react"
import video from '../img/amtax.mp4'
import Shape from './CircleMsg/Shape.js'

export default () => (
<div id="banner">

<div id="first-layer">
    <video autoPlay loop id="myVideo">
    <source src={video} type="video/mp4"/>
    </video>
</div>

<div id="second-layer">
  <Shape 
  backgroundColor="pink" 
  width="50%"
  height="100%"
  position="absolute"
  fontSize="10px" 
  headerFontSize="20px"
  borderRadius="0% 100% 0% 0%"
  title="16-18 MAY 2018" 
  content="| Tax Trends Today"/>
</div>

  <style jsx>{`
  #banner{
    position: relative;
    background-color: rgba(255, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    z-index: 3;
  }
  #myVideo {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  #second-layer{
    position: absolute;
    z-index: 2;
    }
  `}
  </style>
</div>
)