import React from "react"
import WheelImage from '../img/wheel.png'
import Background from '../img/think2.jpg'

// let bgStyle = {
//     backgroundImage: `url(${Background})`
// }

export default () => (
<div className="wrapper">
  <div className="bg-img"></div>
  <div id="grey-area"></div>

  <div className="row">
      <div id="wheel-info" className="col">
          <h1>WHAT WE DO</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis libero leo, sit amet interdum urna scelerisque sed. Quisque vitae sodales turpis, quis hendrerit ex. Fusce magna ipsum, eleifend sed augue id, condimentum volutpat purus. Pellentesque vitae elit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin in lorem dolor. Fusce interdum feugiat nisl.</p>
        </div>
      <div id="wheel" className="col">
        <img src={WheelImage} alt="Graph Wheel"/>
      </div>
    </div>
      <style jsx>{`
      .wrapper {
        display: grid;
        position: relative;
    }.row{
        display: flex;
        justify-content: center;
    }
    .col{
        background: transparent;
      }
      #wheel{
        width: 50%;
        float: right;
        margin:5%;
      }
      #wheel-info{
        position:relative;
        top: 20%;
        left: 5%;
        bottom: 0;
        right: 0;
        margin:2%;
        float: left;
        padding:2%;
        margin:2%;
        height:100%;
        width:100%;
      }
      #wheel-info h1{
        width: 100%;
        color: #00355f;
        font-size: 60px;
        line-height: 58px;
    }
     #wheel-info p{
        width: 100%;
        height: 11.7%;
        color: #000000;
        font-size: 20px;
        line-height: 30px;
        transform: scaleX(1.011);
    }
    .bg-img{
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background-image: url(${Background});
        background-attachment: cover;
        background-position: center; 
        background-repeat: no-repeat;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        
    }
    #grey-area{
        background-color: rgba(225, 225, 225, 0.85);
        position: absolute;
        width: 100%;
        height:60%;
        top:20%;
        z-index: -1;
    }
      `}</style>
</div>
)