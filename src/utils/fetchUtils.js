

const supabaseUrl = 'https://nhbazqqortcneqwecrjp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzU3MywiZXhwIjoxOTU1MDgzNTczfQ.ItAD5AYhCLq3yVOxHVfShkrOdhiFsmpg3uT9tBIISV0'
const supabase = createClient(supabaseUrl, supabaseKey)



let { user, error } = await supabase.auth.signIn({
  email: '',
  password: ''
})


export { user, error }

