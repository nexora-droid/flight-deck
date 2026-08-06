// services handle operations with the database and other data
const supabase = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;

const client = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

async function signUpUser(email, password) {
    const { data, error } = await client.auth.signUp({
        email: email,
        password: password,
        // options: {
            // emailRedirectTo: 'http://localhost:4000/dashboard'
        // }
    })
    return { data, error };
}
 
async function signInUser(email, password) {
    const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: password
    })
    return { data, error };
}

module.exports = {signInUser, signUpUser};