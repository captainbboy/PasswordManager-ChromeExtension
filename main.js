document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let backToHome1 = document.getElementById('backToHome1');
    let mainBox = document.getElementById('mainBox');
    let generatePasswordBox = document.getElementById('generatePasswordBox');
    let generatePassword = document.getElementById('generatePassword');
    let createPassword = document.getElementById('createPassword');
    let lengthInput = document.getElementById('lengthInput');
    let lengthInputRange = document.getElementById('lengthInputRange');
    let capitalsBox = document.getElementById('capitalsBox');
    let numbersBox = document.getElementById('numbersBox');
    let symbolsBox = document.getElementById('symbolsBox');
    let resultBox = document.getElementById('resultBox');
    let result = document.getElementById('result');

    generatePassword.onclick = function(element) {
        mainBox.style.display = "none"
        generatePasswordBox.style.display = "block"
    };

    createPassword.onclick = function(element) {
        result.innerHTML = makePassword(lengthInput.value, capitalsBox.checked, numbersBox.checked, symbolsBox.checked)
        result.style.display = "flex"
        resultBox.style.display = "flex"
        navigator.clipboard.writeText(result.innerHTML)
    }

    backToHome1.onclick = function(element) {
        mainBox.style.display = "block"
        generatePasswordBox.style.display = "none"
    }

    lengthInputRange.oninput = function() {
        updateValue('lengthInput', this.value);
    }

    lengthInput.oninput = function() {
        updateValue('lengthInputRange', this.value);
    }
}

function updateValue(id, val) {
    document.getElementById(id).value=val;
}

function makePassword(length, capitals, numbers, specialChars) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    if(capitals == true) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(specialChars == true) characters += '!~@#$%^&*-+'
    if(numbers == true) characters += '0123456789'
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}