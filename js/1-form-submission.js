let nameError =  document.getElementById('name-error');
let emailError =  document.getElementById('email-error');
let passwordError =  document.getElementById('password-error');
let confirmPasswordError =  document.getElementById('confirm_password-error');
let submitForm = document.getElementById('submitForm');

// Add an event listener to the form element
submitForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    validateForm();
});

function validateName(){
    let name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Please write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
} 

function validateEmail(){
    let email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePassword(){
    let password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.innerHTML = 'Password is required'
        return false;
    }
    if(!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        passwordError.innerHTML = 'Invalid password. Please use at least 8 characters with uppercase, lowercase, digit, and special character.'
        return false;
    }

    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function confirmPassword(){
    let password = document.getElementById('contact-password').value;
    let cPassword = document.getElementById('confirm_password').value;
    let confirmPassworderror = document.getElementById('confirm_password-error');

    if(password === cPassword) {
        confirmPassworderror.innerHTML= ''
        return true;
    } else {
        confirmPasswordError.textContent= 'Passwords do not match'
        return false
    }
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePassword() || !confirmPassword()){
        alert('Please fill in the correct details') 
        return false;
    }
    else{
        submitForm.submit()
    }
    alert('Registeration succesful!')
}