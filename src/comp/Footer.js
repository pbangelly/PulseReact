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
    background-color: rgb(0, 43, 73);
    width: 100%;
    height: auto;
    color: white;
  }
  #bottom-logo{
    height: 118px;
    padding: 20px;
  }
  #logo{
    padding-right:20px;
  }
  #address{
    width: 20%;
    height: auto;
    color: #ffffff;
    font-size: 20px;
    line-height: 22px;
    padding: 20px;
    margin: 20px;
  }
  #copy{
    font-size: 16px;
    line-height: 36px;
  }
  `}</style>
</footer>
)