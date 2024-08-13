var mainNumber = document.getElementById("main")
var number = 0;
const less = document.getElementById("subtrair");
const more = document.getElementById("adicionar");

less.addEventListener('click', function() {
    if(number > -10 && number <= 10) {
        number--;
        mainNumber.innerHTML = number;
        if(number < 0) {
            mainNumber.style.color = 'red';
        }
    } else {
        alert("Número mínimo atingido")
    }
})

more.addEventListener('click', function() {
    if(number >= -10 && number < 10) {
        number++;
        mainNumber.innerHTML = number;
        if (number >= 0) {
            mainNumber.style.color = 'black';
        }
    } else {
        alert("Número máximo atingido");
    }
})

