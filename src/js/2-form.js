const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textarea = form.elements.message;

form.addEventListener('input', inputHandleClick);
form.addEventListener('submit', submitHandleClick);

const localState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (localState) {
  input.value = localState.email ?? '';
  textarea.value = localState.message ?? '';
}

function inputHandleClick(event) {
  let formData = {
    email: event.currentTarget.elements.email.value.trim(),
    message: event.currentTarget.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitHandleClick(event) {
  event.preventDefault();
  if (input.value !== '' && textarea.value !== '') {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('All fields must be filled in');
  }
}
