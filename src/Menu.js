import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    const settings = {
      dots: true,
      arrow: true
    };
    return (
      <div className="Menu">
        <div>Um Gutta</div>
        <div>Verk</div>
        <div>Frekari upplýsingar</div>
      </div>
    );
  }
}

export default Menu;
