// referencing the elements in the HTML
const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email_add');
const password = document.getElementById('password');

// upon refreshing the browser *clearFields()* function clears all input fields 
clearFields();

function clearFields() {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
}

// form event listener to react to the submit button by user
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // logic for determining the correct input for the input fields
    // get input values from user
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passValue = password.value.trim();

    if (firstNameValue === '') {
        // add error message
        addErrorMsg(firstName, "First Name cannot be empty");
    } else {
        addSuccessMsg(firstName);
    }

    if (lastNameValue === '') {
        // add error message
        addErrorMsg(lastName, "Last Name cannot be empty");
    } else {
        addSuccessMsg(lastName);
    }

    if (emailValue === '') {
        // add error message
        addErrorMsg(email, "Email cannot be empty");
    } else if (!validEmail(emailValue)) {
        // add error message
        addErrorMsg(email, "Looks like this is not an email");
    } else {
        addSuccessMsg(email);
    }

    if (passValue === '') {
        // add error message
        addErrorMsg(password, "Password cannot be empty");
    } else if (passValue.length <= 5) {
        // add error message related to length of password
        addErrorMsg(password, "Password must contain at least six characters");
    } else {
        addSuccessMsg(password);
    }
}

function addErrorMsg(input, message) {
    // error message function to add error msg and icon
    const formControl = input.parentElement;
    const image = formControl.querySelector('.error-icon');
    const errorText = formControl.querySelector('.error-msg');

    // outputs error message and error icon
    image.style.opacity = '1';
    errorText.innerText= message;
    input.className = 'input-fields error-box';
}

function addSuccessMsg(input) {
    // succes message function to add success msg and remove error icon
    const formControl = input.parentElement;
    const image = formControl.querySelector('.error-icon');
    const errorText = formControl.querySelector('.error-msg');

    // add success box and remove error icon
    errorText.innerText = "";
    image.style.opacity = '0';
    input.className = 'input-fields success-box';
}

function validEmail(email) {
    // regex test function for valid email
    const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    return re.test(String(email).toLowerCase());
}
