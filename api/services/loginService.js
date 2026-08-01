// services handle operations with the database and other data
const supabase = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;

const client = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

function signUpUser(email, password) {
    const { data, error } = client.auth.signUp({
        email: email,
        password: password,
        // options: {
            // emailRedirectTo: 'http://localhost:4000/dashboard'
        // }
    })
}
 
function signInUser(email, password) {
    const { data, error } = client.auth.signUp({
        email: email,
        password: password
    })
}