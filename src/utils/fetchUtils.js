import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://nhbazqqortcneqwecrjp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzU3MywiZXhwIjoxOTU1MDgzNTczfQ.ItAD5AYhCLq3yVOxHVfShkrOdhiFsmpg3uT9tBIISV0';
const supabase = createClient(supabaseUrl, supabaseKey);

// let { user, error } = await supabase.auth.signIn({
//   email: '',
//   password: ''
// })

async function fetchUserProfile(user_id) {
  const response = await supabase
    .from('blog')
    .select()
    .match({ user_id })
    .single();

  return response;
}

async function createPost(post) {
const response = await supabase.from('blog').insert({posts: post})
return response
}

async function getBlogPosts() {
  const response = await supabase.from('blog').select()
  return response.data[0]
}

async function signInUser(email, password) {
  const response = await supabase.auth.signIn({ email, password });
  console.log('response :>> ', response);
  return response.user;
}

export { fetchUserProfile, signInUser, getBlogPosts };
