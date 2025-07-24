let clientWeb = null

const clientId = "Esp32" + Math.floor(Math.random() * 900) + 100
//clientWeb = new Paho.MQTT.Client("broker.emqx.io", 8084, clientId)
clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId)

clientWeb.connect({
    useSSL: true,
    timeout: 5,
    onSuccess: function() {
        alert("Conectado com sucesso :)")
    },
    onFailure: function(error) {
        alert("A conexão falhou :(")
        console.log(error)
    }
})


function ligarVermelho() {
    document.getElementById("vermelho").classList.add("vermelho")
    
    // Está fazendo o publish no tópico
    const msg = new Paho.MQTT.Message("")
    msg.destinationName = "senai510/semaforo/ligar/vermelho"
    clientWeb.send(msg)
}

function ligarAmarelo() {
    document.getElementById("amarelo").classList.add("amarelo")

    const msg = new Paho.MQTT.Message("")
    msg.destinationName = "senai510/semaforo/ligar/amarelo"
    clientWeb.send(msg)
}

function ligarVerde() {
    document.getElementById("verde").classList.add("verde")

    const msg = new Paho.MQTT.Message("")
    msg.destinationName = "senai510/semaforo/ligar/verde"
    clientWeb.send(msg)
}

function ligarAutomatico() {
    alert("ligando automatico")
}

function desligar() {
    document.getElementById("vermelho").classList.remove("vermelho")
    document.getElementById("amarelo").classList.remove("amarelo")
    document.getElementById("verde").classList.remove("verde")

    const msg = new Paho.MQTT.Message("")
    msg.destinationName = "senai510/semaforo/desligar"
    clientWeb.send(msg)
}