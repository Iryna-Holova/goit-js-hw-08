import throttle from 'lodash.throttle';

let inputValues = {
    email: "",
    message: "",
}

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = "feedback-form-state";
    
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

loadData();

function loadData() { 
    try {
        if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
            inputValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
            emailInput.value = inputValues.email;
            messageInput.value = inputValues.message;
        }
    } catch(error) {return}
};

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputValues));
 };

function onFormSubmit(event) {
    event.preventDefault();
    if (!emailInput.value || !messageInput.value) {
        alert('Please fill in all fields');
    } else {
        console.log(inputValues);
        localStorage.removeItem(STORAGE_KEY);
        event.currentTarget.reset();
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
