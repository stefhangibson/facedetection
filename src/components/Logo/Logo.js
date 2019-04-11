import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import rick from './rick.png';

const Logo = () => {
  return(
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner pa3">
          <img style ={{paddingTop: '5px'}} alt='logo' src={rick}/>
        </div>
      </Tilt>
    </div>
  );
}
export default Logo;
