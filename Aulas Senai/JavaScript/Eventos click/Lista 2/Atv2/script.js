let evento1 = document.getElementById("btn1")
let evento2 = document.getElementById("btn2")
let evento3 = document.getElementById("btn3")
evento1.addEventListener("click",soma)
evento2.addEventListener("click",mult)
evento3.addEventListener("click",comparar)

function soma(){
    let num1 = Number(window.prompt("Digite um número"))
    let num2 = Number(window.prompt("Digite um número"))
    let soma = num1 + num2
    window.alert(soma)
}

function mult(){
    let num1 = Number(window.prompt("Digite um número"))
    let num2 = Number(window.prompt("Digite um número"))
    let mult = num1 * num2
    window.alert(mult)
}

function comparar(){
    let num1 = Number(window.prompt("Digite um número"))
    let num2 = Number(window.prompt("Digite um número"))
    if(num1 > num2){
        window.alert(`${num1} é o maior`)
    }
    else if(num1 < num2){
        window.alert(`${num2} é o maior`)
    }
    else if(num1 == num2){
        window.alert(`Eles são iguais`)
    }
}