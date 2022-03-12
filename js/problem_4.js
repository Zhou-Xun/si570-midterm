const messageInput = document.querySelector('#message-input');
const messageStatus = document.querySelector('#message-feedback')

const MAX_CHARS = 50;

// Write your code here
let cur_len = messageInput.textContent.length;
messageStatus.textContent = `${Math.abs(cur_len-50)} characters left`

messageInput.addEventListener('input', e => {
    cur_len = e.target.value.length;
    if (cur_len <= 50 ){
        messageInput.classList.add('is-valid');
        messageInput.classList.remove('is-invalid');
        messageStatus.classList.add('valid-feedback');
        messageStatus.classList.remove('invalid-feedback');
        messageStatus.textContent = `${Math.abs(cur_len-50)} characters left`
    } else {
        messageInput.classList.add('is-invalid');
        messageInput.classList.remove('is-valid');
        messageStatus.classList.add('invalid-feedback');
        messageStatus.classList.remove('valid-feedback');
        messageStatus.textContent = `${Math.abs(cur_len-50)} characters too long`
    }
})