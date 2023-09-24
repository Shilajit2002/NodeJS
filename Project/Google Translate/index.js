// index.js
const translate = require('google-translate-api');

const textToTranslate = 'Hello, how are you?';
const targetLanguage = 'es'; // Target language code (e.g., 'es' for Spanish)

translate(textToTranslate, { to: targetLanguage })
    .then((result) => {
        console.log(`Translated text: ${result.text}`);
        console.log(`Source language: ${result.from.language.iso}`);
        console.log(`Target language: ${targetLanguage}`);
    })
    .catch((error) => {
        console.error('Translation error:', error);
    });
