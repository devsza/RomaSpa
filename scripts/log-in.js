const emailEl = document.querySelector('#email'); // retrieve user email
const passwordEl = document.querySelector('#password'); // retrieve password
const confirmPasswordEl = document.querySelector('#confirm-password'); // retrieve confirmation password
const form = document.querySelector('#signup'); // retrieve submit button

// class user
class User {
    userFirstName;
    userLastName;
    userEmail;
    userPassword;
    userTel;
    userMobile;
    userDateOfBirth;
    userAddresses=[];
    userCart=[];
    userCartTotal=0;
    userTreatment=[];
    userFollowOrder=[];
    userHistory=[];
    loggedIn = false;

    constructor(firstName, lastName, addresses, email, password, tel, mobile, dob){
        this.userFirstName = firstName;
        this.userLastName = lastName;
        this.userAddresses = addresses;
        this.userEmail = email;
        this.userPassword = password
        this.userTel = tel;
        this.userMobile = mobile;
        this.userDateOfBirth = dob;
    }

} // end of class

// create user
let userFra = new User("Francesca", "Nadel", {"domicile":"Bordeaux"}, "francesca.nadel@gmail.com", "M@tSecr3t","0622000452", "0622000452", "30/05/1977")

// create user in localStorage
localStorage.setItem('user', JSON.stringify(userFra)); 

// check email entered correctly
const checkEmail = function() {

    let valid = false;

    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl, "L'email ne peut pas être vide");
    } else if (!isEmailValid(email)) {
        showError(emailEl, "L'email est invalide")
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

// check password entered correctly
const checkPassword = function() {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Le mot de passe ne peut pas être vide');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Le mot de passe doit avoir au minimum 8 caractères, avec au moins : 1 majuscule, 1 miniscule, 1 nombre et 1 caractère spécial compris dans (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};


// called in checkEmail function, confirms email format
const isEmailValid = function(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// checks that the password format is correct
const isPasswordSecure = function(password) {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// displays if there is an error
const showError = function(input, message) {
  
    const formField = input.parentElement;
   
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

// displays if everything is ok
const showSuccess = function(input) {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}

// button se connecter
form.addEventListener('submit', function (e) {
    
    e.preventDefault();

    // validate fields
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
   
    let isFormValid = 
        isEmailValid &&
        isPasswordValid
   
    // if all entries are valid, check input
    if (isFormValid){
        // retrieve user info
        let retrieveUserInfo = localStorage.getItem('user'); // format string
        let user = JSON.parse(retrieveUserInfo);// format objet
            // if input info matches user info, sign-in, update user logged in status and 
            // go to user account page / else ask to sign-up
            if(emailEl.value == user.userEmail && passwordEl.value == user.userPassword){
                user.loggedIn = true;
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = "/pages/account.html";
            } else {
                alert("Vous n'avez pas de compte, merci de vous inscrire.");
            }
    }

});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

// check validity of entries on input
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        
    }
}));
