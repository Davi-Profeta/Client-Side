window.addEventListener("load",carregar)

setInterval(carregar, 1000)

function carregar() {
let msg = document.getElementById("msg")
let img = document.getElementById("photo")
let agora = new Date()
let horas = agora.getHours()
let minutos = agora.getMinutes()
let minutos_F = minutos < 10 ? '0' + minutos : minutos

if (horas >= 0 && horas < 6) {
    msg.innerText = "Agora são " + horas + ":" + minutos_F + ", boa madrugada!"
    img.src = "img/"
    document.body.style.backgroundColor = "#1c2e4a"
} 
else if (horas >= 6 && horas < 12) {
    msg.innerText = "Agora são " + horas + ":" + minutos_F + ", bom dia!"
    img.src = "img/istockphoto-1402473970-612x612.jpg"
} 
else if (horas >= 12 && horas < 18) {
    msg.innerText = "Agora são " + horas + ":" + minutos_F + ", boa tarde!"
    img.src = "img/bela-vista-da-luz-do-nascer-do-sol_23-2148851731.avif"
    document.body.style.backgroundColor = "#895129"
} 
else if (horas >= 18 && horas < 24) {
    msg.innerText = "Agora são " + horas + ":" + minutos_F + ", boa noite!"
    img.src = "img/images.jpg"
    document.body.style.backgroundColor = "gray"
} 
else {
    msg.innerText = "Erro"
    img.src = ""
}


}





