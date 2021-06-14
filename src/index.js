import cipher from './cipher.js';

console.log(cipher);
    

const encodeButton = document.getElementById('encodeButton');

//addEventListener > Event type, function call back
encodeButton.addEventListener("click", event => { 
    event.preventDefault()
    let offset = document.getElementById("key").value;
    let string = document.getElementById("textarea").value;
    document.getElementById('result').innerHTML = cipher.encode(offset, string);
})




const decodeButton = document.getElementById('decodeButton');

decodeButton.addEventListener("click", event => { 
    event.preventDefault()
    let offset = document.getElementById("key").value;
    let string = document.getElementById("textarea").value;
    document.getElementById('result').innerHTML = cipher.decode(offset, string);
})


//Modal

const modalOpen = document.querySelector('.modal-btn');
// const openLink = document.querySelector('open-link');

const overlay = document.querySelector('.modal-background');

const modalClose = document.querySelector('.close-button');
const closeButton = document.querySelector('#close-button');
// const pressEsc = document.querySelector('.modal-background');

modalOpen.addEventListener('click', function() {
    overlay.classList.add('active');
})

// openLink.addEventListener('click', function() {
//     overlay.classList.add('active');
// })

modalClose.addEventListener('click', function() {
    overlay.classList.remove('active');
})

closeButton.addEventListener('click', function(){
    overlay.classList.remove('active');
})

// pressEsc.addEventListener('keydown', function(esc) {
//     if(esc.key === 'Escape') {
//         overlay.display = 'none';
//     }
// })