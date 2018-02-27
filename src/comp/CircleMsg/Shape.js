import React from 'react'

const divStyle = {
  display:"boxingSize",
  borderRadius: "100%",
  padding:"5%",
  margin:"5%",
  opacity:"0.7"
};

const Shape = ({title, content, backgroundColor, width, height, position, fontSize, headerFontSize, borderRadius}) => (
      <div style={Object.assign({}, divStyle, {
        backgroundColor,
        width,
        height,
        position,
        fontSize,
        borderRadius
      })}>
          <span style={{fontSize: headerFontSize}}>{title}</span>
          <p>{content}</p>
      </div>
    );

export default Shape;