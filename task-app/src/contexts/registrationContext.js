import React, { createContext, useReducer } from 'react';

const initialState = {
  name: '',
  education: '',
  pic: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REGISTRATION':
      return {
        ...state,
        name: action.payload.name,
        education: action.payload.education,
        pic: action.payload.pic,
      };
    default:
      return state;
  }
}

export const RegistrationContext = createContext();

export const RegistrationContextProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};
