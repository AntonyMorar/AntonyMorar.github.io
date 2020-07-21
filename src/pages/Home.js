import React from 'react';
import NavTop from '../components/NavTop'

import videoP from '../assets/Reel2020.mp4'

class Home extends React.Component {
    render() {
      return (
          <div className="home">
            <NavTop></NavTop>
            <div className="bgVideo">
                <video className="bgVideoInner" autoPlay muted playsInline loop src={videoP}></video>
            </div>
          </div>
      );
    }
  }


export default Home;