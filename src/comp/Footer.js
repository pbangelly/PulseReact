import React from "react"
import Social from "../img/social_media.png"
import BottomLogo from "../img/bottom-logo.png"

export default () => (
<footer className="footer">
  <div className="container">
    <div className="footer-content">
      
      <div id="bottom-logo">
        <img src={BottomLogo} alt="logo"/>
        <div id="address">
          600 Madison Avenue<br/>
          8th Floor<br/>
          New York, New York, 10022
        </div>
      </div>
      
      <div id="social">
        <strong>Follow us on: </strong>
        <br />
        <img src={Social} alt="social-media"/>
      </div>		
    </div>
    <div className="row">
      <div id="copy">
        © Copyright 2017, Alvarez & Marsal Holdings, LLC. All Rights Reserved.
      </div>
    </div>
  </div>
  <style jsx>{`
    .footer{
      background-color: rgb(0, 43, 73);
      width: 100%;
      height: auto;
      color: white;
    }
    .container {
      max-width: 970px;
      margin: 0 auto;
    }
    .row{
      display: flex;
    }
    .footer-content{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2em;
      padding-bottom: 3em;
    }
    #bottom-logo{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 42%;
    }
    #address{
      color: #ffffff;
      font-size: 20px;
      line-height: 22px;
    }
    #copy{
      font-size: 16px;
      line-height: 36px;
      padding:1%;
    }
    #social{
    }
  `}</style>
</footer>
)