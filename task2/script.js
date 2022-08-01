const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', function() {
     alert('Метод для вывода сообщения в веб-консоль.');
})

const alert1 = document.querySelector('#alert1');

alert1.addEventListener('click', function() {
     alert('Метод для вывода сообщения в веб-консоль.');
})

const prompt1 = document.querySelector('#prompt1');

prompt1.addEventListener('click', function() {
    prompt('Метод для вывода сообщения в веб-консоль.');
})