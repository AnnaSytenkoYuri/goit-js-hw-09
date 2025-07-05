
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

let formData = {
    email: "",
    message: ""
}

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
}

form.addEventListener("input", (event) => {
  const {name, value} = event.target;

  formData[name] = value;
  localStorage.setItem( localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {email, message} = formData;
  if (email.trim() === "" || message.trim() === "") {
    alert("Fill please all fields");
    return;
  }
  console.log("Form Data:", formData);
  localStorage.removeItem(localStorageKey);
  formData = {email: "", message: ""};
  form.reset();
});
