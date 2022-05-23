import React, { createContext, useContext, useEffect, useReducer } from 'react';
// import { createClient } from '@supabase/supabase-js'
import { getBlogPosts } from '../utils/fetchUtils';


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
const see = await getBlogPosts()
// let arr = []
// arr.push({id: see.id, post: see.posts,  email: 'cheeseGuy123@cheese.co', })
const entries = [
  {
    id: see.id, post: see.posts,  email: 'cheeseGuy123@cheese.co',
  }
]
// entries.push({id: see.id, post: see.posts,  email: 'cheeseGuy123@cheese.co', })
dispatch({
  type: 'resetBackToNormal',
  payload: entries,
});
console.log('see :>> ', see);
    }
    loadEverything()
  }, [])


  function addPost(post) {
    const payload = {
      ...post,
    };
    dispatch({type: 'create', payload})
    return payload
  }

  
  return <InteractionContext.Provider value={{entries, addPost}}>
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



