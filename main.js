/*Hacemos las referencias de nuestros objetos de nuestro html*/
const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

/*Hacemos las referencias de nuestras mascara personalizada*/
const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

/*Creamos diferentes arreglos que almacenaran los datos digitados*/
let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

/*Hacemos los eventos que se realizaran cada vez que se presione una letra o un caracter con la funcion 'keydown'*/
inputCard.addEventListener("keydown", (e) => { /*Este input es para la parte de los numeros de la tergeta*/
    if (e.key === 'tab') {
        return;
    }
    e.preventDefault();
    handleInput(maskNumber, e.key, cardNumber);
    inputCard.value =cardNumber.join("");
})

inputDate.addEventListener("keydown", (e) => { /*Este input es para la parte de la fecha de la tergeta*/
    if (e.key === 'tab') {
        return;
    }
    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);
    inputDate.value =dateNumber.join("");
})

inputCVV.addEventListener("keydown", (e) => { /*Este input es para la clave de la tergeta*/
    if (e.key === 'tab') {
        return;
    }
    e.preventDefault();
    handleInput(maskCVV, e.key, cvvNumber);
    inputCVV.value =cvvNumber.join("");
})

function handleInput(mask, key, arr){
    let numbers= ["0","1","2","3","4","5","6","7","8","9"];/*Aqui van a estar todas las teclas que el usuario tiene permitido teclear  */
    if (key === 'backspace' && arr.length > 0) {
        arr.pop();
        return;
        
    }
    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
        if (mask[arr.length] === "-" || mask[arr.length] === "/") {
            arr.push(mask[arr.length], key);
        }else{
            arr.push(key);
        }
    }
}




