import React, { Component } from 'react'
import logo from './images/logo.png';
import './NavbarStyles.css';
import bars from './images/bars.png';
import times from './images/X.png';



class Navbar extends Component {
  state={clicked: false};
  handleClick=()=>{
    this.setState({clicked: !this.state.clicked});
  };
  render(){
  return (
    
        <nav>
          <a href="index.html">
      <img className='logo' src={logo} alt="logo"/>
      </a>
      <div>
        <ul id="links" className={this.state.clicked ? "#links active" : "#links"}
        >
            <li>
                <a className="active" href="index.html">Home</a>
            </li>
            <li>
                <a href="index.html">Shop</a>
            </li>
            <li>
                <a href="index.html">Blog</a>
            </li>
            <li>
                <a href="index.html">About</a>
            </li>
            <li>
                <a href="index.html">Contact</a>
            </li>
        </ul>
      </div>
      <div className='mobile'
      onClick={this.handleClick}>
    <img id="bar" src={this.state.clicked ? times:
    bars} alt=""/>
      </div>
      </nav>
   
  );
}
}

export default Navbar;