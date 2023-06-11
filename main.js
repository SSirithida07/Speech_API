// main.js
let text = document.querySelector('.texts');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'th-TH';
recognition.continuous = true;
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener("result", (event) => {
    const texts = Array.from(event.results)
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join(' ');

    console.log(texts);
    p.innerText = texts;
    text.appendChild(p);
});

recognition.start();
