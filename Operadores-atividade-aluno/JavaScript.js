
console.log("Preciso de dois números.");
const text01 = action();
console.log(text01);

//-------------------------------------------------------------------------------------------

function action() {
    const number01 = verification();
    const number02 = verification();

    const affirmation = (number01 === number02) ? "são" : "não são";

    const soma = number01 + number02;

    let dez, vinte;

    if (soma > 20) {
        dez = "maior";
        vinte = "maior";
    } else if (soma < 10) {
        dez  = "menor";
        vinte = "menor";
    } else {
        dez = "maior";
        vinte = "menor";
    }

    const string01 = `Os números ${number01} e ${number02} ${affirmation} iguais. Sua soma é ${soma}, que é ${dez} que 10 e ${vinte} que 20.`;

    return string01;
}

function verification() {
    let number;

    while (true) {
        number = prompt("Digite um número: ");
        if (number !== null) {
            console.log("Número Válido!");
            return parseInt(number, 10);
        } else {
            console.log("Número inválido! Tente novamente.");
        }
    }
}