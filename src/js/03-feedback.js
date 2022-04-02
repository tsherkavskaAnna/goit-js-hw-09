import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(`.feedback-form`),
    email: document.querySelector(`input`),
    message: document.querySelector(`textarea`),
};
console.log(refs);

let formData = {
    email: "",
    message: "",
};
const LOCALSTORAGE_KEY = `feedback-form-state`;

refs.form.addEventListener(`input`, throttle(onFormImput, 500 ));
refs.form.addEventListener(`submit`, onFormSubmit);
    

function onFormImput(event) {
    formData[event.target.name] = event.target.value;
    console.log(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};



function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    formData = {
        email: "",
        message: "",
    }
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}


function populateTextArea() {
    let savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
    
 if(savedMessage) {
    const parsedMessage = JSON.parse(savedMessage);
   formData = parsedMessage;

   refs.email.value = parsedMessage.email;
   refs.message.value = parsedMessage.message;
    }
}

populateTextArea ()