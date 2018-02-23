import React from "react"
import WheelImage from '../img/wheel.png'
import Background from '../img/think2.jpg'

// let bgStyle = {
//     backgroundImage: `url(${Background})`
// }

export default () => (
<div id="graph-wrapper">
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
      #graph-wrapper {
        border: red 3px solid;
        display: grid;
        position: relative;
    }
    .col{
        background: transparent;
      }
      #wheel img{
        border: yellow 3px solid;
        width:50%;
        height:auto;
      }
      #wheel-info{
        width:30%;
        height:auto;
        overflow: hidden;
      }
      #wheel-info h1{
        border: purple 3px solid;
        margin-bottom:5%;
        width:100%;
    }
    #wheel-info p{
        width:100%;
        height:auto;
        border: orange 3px solid;
    }
    .bg-img{
        position: absolute;
        height: 100vh;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-position: center;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }
    #grey-area{
        border: blue 3px solid;
        position: absolute;
        height: 50%;
        width: 100%;
        top: 15%;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-color:lightgrey;
        opacity: 0.8;
    }

      `}</style>
</div>
)