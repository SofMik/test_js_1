const userTextField = document.querySelector('#text');

userTextField.addEventListener('click', (event) => {
   const userText = prompt('Введите текст ссылки');
   userTextField.textContent = userText;
   event.preventDefault();
   
});
