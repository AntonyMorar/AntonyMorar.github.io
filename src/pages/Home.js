import React from 'react';
import NavTop from '../components/NavTop'

class Home extends React.Component {
    render() {
      return (
          <div className="home">
            <NavTop></NavTop>
            <h1>Home</h1>
          </div>
      );
    }
  }


export default Home;