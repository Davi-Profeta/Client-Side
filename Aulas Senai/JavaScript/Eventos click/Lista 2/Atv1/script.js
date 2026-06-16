let evento1 = document.getElementById("btn1")
let evento2 = document.getElementById("btn2")
let evento3 = document.getElementById("btn3")
evento1.addEventListener("click",bomdia)
evento2.addEventListener("click",boatarde)
evento3.addEventListener("click",boanoite)

function bomdia(){
    window.alert("Bom dia!")
}

function boatarde(){
    window.alert("Boa tarde!")
}

function boanoite(){
    window.alert("Boa noite!")
}