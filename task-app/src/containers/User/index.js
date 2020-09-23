import React, { useContext } from 'react';
import { RegistrationContext } from '@/contexts/registrationContext';

import './styles.css';

function User() {
  const [{ name, education, pic }] = useContext(RegistrationContext);
  return (
    <div className="parent">
      <div className="imgDivParent">
        <div className="imgDiv">
          <img
            className="w-100 h-100"
            src={pic}
            style={{
              display: pic ? 'inline-block' : 'none',
            }}
            alt=""
          />
        </div>
        <div />
      </div>
      <div className="infoDiv">
        <div className="infoDiv_cont">
          <h2>{name}</h2>
          <h2>{education}</h2>
        </div>
      </div>
    </div>
  );
}

export default User;
