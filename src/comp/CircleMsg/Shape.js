import React from 'react'

const divStyle = {
  postion: "static",
  zIndex: 3,
  borderRadius: "20px",
  padding: "20px",
  width: "200px",
  height: "150px"
};

const Shape = ({title, content, backgroundColor, fontSize, width='100%', headerFontSize}) => (
      <div className="row" id="wrapper" style={Object.assign({}, divStyle, {
        backgroundColor,
        fontSize,
        width
      })}>
        <div className="col">
          <span style={{fontSize: headerFontSize}}>{title}</span>
          <p>{content}</p>
        </div>
      </div>
    );

export default Shape;