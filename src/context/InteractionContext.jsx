import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { createClient } from '@supabase/supabase-js'


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
    async function loadEverything() {
// const supabaseUrl = 'https://nhbazqqortcneqwecrjp.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzU3MywiZXhwIjoxOTU1MDgzNTczfQ.ItAD5AYhCLq3yVOxHVfShkrOdhiFsmpg3uT9tBIISV0'
// const supabase = createClient(supabaseUrl, supabaseKey)

    }
    const entries = [
      {
        id:0,
        post: 'first post globally',
        email: 'cheeseGuy123@cheese.co',

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



