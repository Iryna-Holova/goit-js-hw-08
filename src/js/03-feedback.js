var throttle = require('lodash.throttle');

let inputValues = {
    email: "",
    message: "",
}

form = document.querySelector('.feedback-form');
emailInput = form.querySelector('input');
messageInput = form.querySelector('textarea');
    
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

loadData();

function loadData() { 
    try {
        if (JSON.parse(localStorage.getItem("feedback-form-state"))) {
            inputValues = JSON.parse(localStorage.getItem("feedback-form-state"));
            emailInput.value = inputValues.email;
            messageInput.value = inputValues.message;
        }
    } catch(error) {return}
};

function saveData() {
    localStorage.setItem("feedback-form-state", JSON.stringify(inputValues));
 };

function onFormSubmit(event) {
    event.preventDefault();
    if (!emailInput.value || !messageInput.value) {
        alert('Please fill in all fields');
    } else {
        console.log(inputValues);
        localStorage.clear();
        emailInput.value = '';
        messageInput.value = '';
        inputValues.email = '';
        inputValues.message = '';
    }
};

function onFormInput(event) {

    switch (event.target.getAttribute('name')) {
        case 'email':
            inputValues.email = event.target.value;
            break;
        case 'message':
            inputValues.message = event.target.value;
            break;
        default:
            return;
    }
    
    saveData();
};
