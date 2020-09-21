import React, { useContext } from 'react';
import { RegistrationContext } from '@/contexts/registrationContext';

function User() {
  const [{ name, education, pic }] = useContext(RegistrationContext);
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div
        style={{
          float: 'left',
          width: '20%',
          height: '100%',
        }}
      >
        <div
          style={{
            height: '50%',
            borderBottom: '2px solid black',
          }}
        >
          <img
            src={pic}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt=""
          />
        </div>
        <div />
      </div>
      <div
        style={{
          float: 'left',
          width: '80%',
          height: '100%',
          border: '2px solid black',
          borderTop: 'none',
          textAlign: 'center',
        }}
      >
        <h2>{name}</h2>
        <h2>{education}</h2>
      </div>
    </div>
  );
}

export default User;
