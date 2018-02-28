import React from 'react'

const divStyle = {
  boxSizing:"border-box",
  borderRadius: "100%"
};

const Circle = ({title, content, backgroundColor, width = "500px", fontSize, headerFontSize, borderRadius}) => (
      <div style={Object.assign({}, divStyle, {
          backgroundColor,
          width,
          height: width,
          fontSize
        })}
      >
      </div>
    );

export default Circle;