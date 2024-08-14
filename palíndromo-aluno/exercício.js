let text = "isaque";

let newText = text.split('').reverse().join('');

text = text = text.replace(/\s+/g, '');
newText = newText = newText.replace(/\s+/g, '');

console.log(`${(text === newText) ? 'Esse é um palíndromo.': 'Esse não é um Palíndromo.'}`);