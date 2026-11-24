document.addEventListener("DOMContentLoaded", (e) => {
    const accountForm = document.getElementById('newAccountForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    const passwordRequirement = document.getElementById('requirements');
    const passwordMatch = document.getElementById('passwordMatch');
    passwordRequirement.hidden = true;
    passwordMatch.hidden = true;
    accountForm.onsubmit = (e)=>{
        e.preventDefault();
        sendAccountForm(password.textContent, email.textContent);
        return false;
    }

    function sendAccountForm(pwd, eml) {
        fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify ({
                email: email,
                password: password
            })
        })
    }

    password.addEventListener('input', ()=>{
        if (password.value.length < 8) {
            passwordRequirement.hidden = false;
        } else {
            passwordRequirement.hidden = true;
        }
    })


    confirmPassword.addEventListener('input', ()=> {
        if (confirmPassword.value != password.value || confirmPassword.value == null) {
            passwordMatch.hidden = false;
        } else {
            passwordMatch.hidden = true;
        }
    })

    const signUpBtn = document.getElementById("signUp");
    const signInBtn = document.getElementById("signIn");
    signInBtn.focus();
    signUpBtn.addEventListener("click", ()=> {
        signUpBtn.focus();
        signInBtn.blur();
    })
    signInBtn.addEventListener("click", ()=> {
        signUpBtn.blur();
        signInBtn.focus();
    })
})