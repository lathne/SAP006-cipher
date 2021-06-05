import cipher from './cipher.js';

console.log(cipher);

const encodeButton = document.getElementById('encodeButton');
//addEventListener > Event type, function call back
encodeButton.addEventListener("click", e => { 
    let offset = document.getElementById("key").value;
    let string = document.getElementById("textarea").value;
})
document.getElementById(result).innerHtml = cipher.encode(offset, string);


const decodeButton = document.getElementById('decodeButton');

decodeButton.addEventListener("click", e => { 
    let offset = document.getElementById("key").value;
    let string = document.getElementById("textarea").value;
    
})
document.getElementById(result).innerHtml = cipher.decode(offset, string);



