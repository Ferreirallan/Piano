const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav"); //por padrão, a origem do áudio é "a" melodia

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passando áudio src com base na tecla pressionada
    audio.play(); //playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // elemento-chave clicado
    clickedKey.classList.add("active"); // adicionando classe ativa ao elemento-chave clicado
    setTimeout(() => { // removendo classe ativa após 150 ms do elemento-chave clicado
        clickedKey.classList.remove("active");
    }, 150);
    
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // adicionando valor de chave de dados ao array allKeys
    // chamando a função playTune passando o valor da chave de dados como argumento
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; //passing the range slider value as an audio volume
}


const howHideKeys = (e) =>{
    // alternando ocultar classe de cada chave no clique da caixa de seleção
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    // se a tecla pressionada estiver no array allKeys, chame apenas a função playTune
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);