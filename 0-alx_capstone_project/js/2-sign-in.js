let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let signInform = document.getElementById('signIn');
let checkColor = document.getElementById('check-color');

// Add an event listener to the form element
signInform.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    signIn();
});

// Email validation
function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle fa-2x"></i>';
    return true;
}

// Password validation
function validatePassword() {
    let password = document.getElementById('contact-password').value;

    if (password.length == 0) {
        passwordError.innerHTML = 'Password is required'
        return false;
    }
    if (!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passwordError.innerHTML = 'Invalid password. Please use at least 8 characters with uppercase, lowercase, digit, and special character.'
        return false;
    }

    passwordError.innerHTML = '<i class="fas fa-check-circle fa-2x"></i>';
    return true;
}


function signIn() {
    if (!validateEmail() || !validatePassword()) {
        alert('Please fill in the correct details')
        return false;
    }
    else {
        window.location.href = "3-index.html"
    }
    alert('login succesful!')
    return true
}