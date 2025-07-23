

function ligarVermelho() {
    document.getElementById("vermelho").classList.add("vermelho")
}

function ligarAmarelo() {
    document.getElementById("amarelo").classList.add("amarelo")
}

function ligarVerde() {
    document.getElementById("verde").classList.add("verde")
}

function ligarAutomatico() {
    alert("ligando automatico")
}

function desligar() {
    document.getElementById("vermelho").classList.remove("vermelho")
    document.getElementById("amarelo").classList.remove("amarelo")
    document.getElementById("verde").classList.remove("verde")
}