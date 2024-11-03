// 1
const radios = document.querySelectorAll('input[name="color"]');

radios.forEach(radio => {
   radio.addEventListener('change', () => {
    document.body.style.backgroundColor = radio.value;
   });
});

document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;

// 2.1
const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
    output.textContent = input.value.trim() !== '' ? input.value : 'Незнайомець';
});

// 2.2
const validation = document.getElementById('validation-input');
const requiredLength = parseInt(validation.dataset.length, 10);

validation.addEventListener('blur', () => {
    if(validation.value.length === requiredLength){
        validation.classList.add('valid');
        validation.classList.remove('invalid');
    } else{
        validation.classList.add('invalid');
        validation.classList.remove('valid');
    }
});

// 3
const fontChange = document.getElementById('font-size-control');
const font = document.getElementById('text');

font.style.fontSize = `${fontChange.value}px`
fontChange.addEventListener('input', () => {
    font.style.fontSize = `${fontChange.value}px`
});