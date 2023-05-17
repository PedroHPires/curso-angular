"use strict";

const form = document.getElementById('select-radio');
const submit = document.getElementById('submit')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const radio = form.radio;
    console.log(radio.value)
    submit.innerHTML = radio.value

});