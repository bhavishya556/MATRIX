import React from 'react';
import './cube.css'; // Import the CSS file with cube styles

class Cube extends React.Component {
  render() {
    return (
        <div className="rotating-cube">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
          <h2 className='cube-head'>Notion Lab</h2>
      </div>
    );
  }
}

export default Cube;
