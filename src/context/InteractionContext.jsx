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
  
  return <InteractionContext.Provider value={{entries}}>
    {children}
  </InteractionContext.Provider>;
}



const useData = () => {
  const context = useContext(InteractionContext)
  if (context === undefined) {
    throw new Error('useData must be used within a InteractionProvider')
  }
  return context
};

export { InteractionProvider, useData }



