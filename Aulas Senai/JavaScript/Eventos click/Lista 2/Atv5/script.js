let event1 = document.getElementById("btn1")
event1.addEventListener("click",Vsaldo)

let event2 = document.getElementById("btn2")
event2.addEventListener("click",deposito)

let event3 = document.getElementById("btn3")
event3.addEventListener("click",saque)

let saldo = 0

function Vsaldo(){
    window.alert(`Seu saldo é ${saldo}`)
}

function deposito(){
    let num = Number(window.prompt(`Quanto você vai depositar`))
    saldo = saldo + num
    if(num < 0){
        window.alert(`Erro, verifique os dados`)
    }
    window.alert(`Deposito feito`)
}

function saque(){
    let sacar = Number(window.prompt(`Seu saldo é ${saldo}
Quanto vai sacar?`))

    if(sacar > saldo){
        window.alert(`Saldo insuficiente`)
    }
    else if(sacar < 0){
        window.alert(`Erro, verifique os dados`)
    }

    saldo = saldo - sacar

   
}

