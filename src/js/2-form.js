let formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
console.log(form);

const emailInput = form.elements.email;
const messageTextarea = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email || "";
  messageTextarea.value = formData.message || "";
}

form.addEventListener('input', (event) => {
    if (event.target.name === 'email' || event.target.name === 'message') {
      formData[event.target.name] = event.target.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
});
  

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, message } = formData;

    if (email.trim() === "" || message.trim() === "") {
      alert("Please fill all fields");
      return;
    } console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
  });
  
