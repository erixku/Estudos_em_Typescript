const primeiroNome = "Erick";
const outroNome = 1;
const x = true;

//A tipagem em TS é utilizada com "<variável>: <tipo do dado>"

function boas_vindas(nome: string) {
    console.log("Olá " + nome);
}

boas_vindas(primeiroNome);