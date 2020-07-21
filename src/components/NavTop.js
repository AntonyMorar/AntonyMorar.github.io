import React from 'react';
import {Link} from 'react-router-dom';

class NavTop extends React.Component {
    render() {
      return (
          <div className="menu">
            <div className="wrap">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
          </div>
      );
    }
  }


export default NavTop;