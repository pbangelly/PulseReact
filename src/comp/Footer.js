import React from "react"
import Social from "../img/social_media.png"
import BottomLogo from "../img/bottom-logo.png"

export default () => (
<footer>
    <div className="row">
      <div className="col" id="bottom-logo">
        <img src={BottomLogo} alt="logo"/>
      </div>
      
      <div className="col" id="address">
        600 Madison Avenue<br/>
        8th Floor<br/>
        New York, New York, 10022
      </div>
      
      <div className="col" id="social">
        <strong>Follow us on: </strong>
        <br />
        <img src={Social} alt="social-media"/>
      </div>		
    </div>
    <div className="row" id="copy">
      © Copyright 2017, Alvarez & Marsal Holdings, LLC. All Rights Reserved.
    </div>
  <style jsx>{`
  footer{
    position: absolute;
    background-color: rgb(0, 43, 73);
    width: 100%;
    height: auto;
    color: white;
  }
  .row{
    display: flex;
    flex-direction: col;
  }
  #bottom-logo{
    position: absolute;
    height: 1%;
    left: 8%;
    top: 14%;
  }
  #address{
    position: relative;
    width: 75%;
    height: auto;
    color: #ffffff;
    font-size: 20px;
    line-height: 22px;
    padding: 2%;
    margin: 2%;
    padding:3%;
    left: 15%;
  }
  #copy{
    position:relative;
    font-size: 16px;
    line-height: 36px;
    padding:1%;
    left: 6%;
  }
  #social{
    position: absolute;
    width: 100%;
    height: auto;
    left: 83%;
    top: 20%;
  }
  `}</style>
</footer>
)