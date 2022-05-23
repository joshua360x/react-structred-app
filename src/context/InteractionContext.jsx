import React, { createContext, useContext, useEffect, useReducer } from 'react';

function postReducer(entries, { type, payload }) {
  switch (type) {
    case 'create':
      const entryFromUser = { ...payload, id: entries.length };
      return [entryFromUser, ...entries];
    case 'resetBackToNormal':
      return [...payload];
    default:
      throw Error(`Unknownn action: ${type}`);
  }
}

export const InteractionContext = createContext();

function InteractionProvider({ children }) {
  const [entries, dispatch] = useReducer(postReducer, [])
  useEffect(() => {
    const entries = [
      {
        id:0,
        post: 'first post globally',
        user: 'cheeseGuy123',

      }
    ]
    
    dispatch({
      type: 'resetBackToNormal',
      payload: entries,
    });
  }, [])
  
  return <InteractionProvider value={{entries}}>
    {children}
  </InteractionProvider>;
}
