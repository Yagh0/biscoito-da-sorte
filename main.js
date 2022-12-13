const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const tryLuckBtn = document.querySelector("#trybtn")
const resetBtn = document.querySelector("#resetbtn")
let randomPhraseNumber = Math.round(Math.random() * 10)

tryLuckBtn.addEventListener("click", tryLuckClick)
resetBtn.addEventListener("click", resetClick)
document.addEventListener("keydown", reset)

function toggleScreen() {
    screen1.classList.toggle("hidden")
    screen2.classList.toggle("hidden")
}

function pickPhrase(randomPhrase) {
    switch(randomPhrase) {
        case 0: 
            screen2.querySelector("p").innerText = `O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.`
            break
        case 1:
            screen2.querySelector("p").innerText = `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`
            break
        case 2:
            screen2.querySelector("p").innerText = `Não compense na ira o que lhe falta na razão.`
            break
        case 3:
            screen2.querySelector("p").innerText = `Gente todo dia arruma os cabelos, por que não o coração?`
            break
        case 4:
            screen2.querySelector("p").innerText = `Todo mundo é capaz de denominar uma dor, exceto quem a sente.`
            break
        case 5:
            screen2.querySelector("p").innerText = `As pessoas se esquecerão do que você disse e do que você fez… mas nunca se esquecerão de como você as fez sentir.`
            break
        case 6:
            screen2.querySelector("p").innerText = `O amor está mais próximo do que você imagina.`
            break
        case 7:
            screen2.querySelector("p").innerText = `Nós somos o que pensamos.`
            break
        case 8:
            screen2.querySelector("p").innerText = `Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram trabalhando.`
            break
        case 9:
            screen2.querySelector("p").innerText = `Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.`
            break
        case 10:
            screen2.querySelector("p").innerText = `Acredite em milagres, mas não dependa deles.`
            break
        default:
            alert("Erro no gerador de frases!")
            break
    }
}

function generateNewPhrase() {
    randomPhraseNumber = Math.round(Math.random() * 10)
    return randomPhraseNumber
}

function tryLuckClick() {
    toggleScreen()
    pickPhrase(randomPhraseNumber)
}

function resetClick() {
    toggleScreen()
    generateNewPhrase()
}

function reset(e) {
    if(e.key == "Enter" && screen1.classList.contains("hidden")) {
        toggleScreen()
        generateNewPhrase()
    }
    if(e.key == "Escape" && screen1.classList.contains("hidden")) {
        toggleScreen()
        generateNewPhrase()
    }
}