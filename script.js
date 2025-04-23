const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("tunes/a.wav"); //por padrão, a origem do áudio é "a" melodia

const playTune = (key) => {

}

pianoKeys.forEach(key => {
    // chamando a função playTune passando o valor da chave de dados como argumento
    key.addEventListener("click", () => plauTune(key.dataset.key))

});
