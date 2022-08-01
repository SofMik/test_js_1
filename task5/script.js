let inputText = document.querySelector('input');

inputText.addEventListener('keyup', function(event) {
    let copyText = document.querySelector('#duplicateField')
    copyText.textContent = event.target.value;

    let button = document.querySelector('button');
        button.addEventListener('mousedown', function() {
        console.log(event.target.value);
        document.querySelector('input').value = '';
        copyText.textContent = event.target.value;
        event.preventDefault();
        });
});  
