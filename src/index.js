

import cipher from './cipher.js';

let encodeButton = document.getElementById('encode');
let decodeButton = document.getElementById('decode');
let result = document.getElementById('result');

encodeButton.addEventListener("click", e => {
    result.innerHTML = cipher.encode();
})

decodeButton.addEventListener("click", e => {
    result.innerHTML = cipher.decode();
})



/* 
let key = document.getElementById('key').value ??
let textArea = document.getElementById('textarea').value ??
*/

console.log(cipher);