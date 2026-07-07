let age; 
let idade = document.getElementById("idade")
idade.addEventListener("click", Age)

function Age(){
    age = document.getElementById("age").value

    if(age == "" || age <= 0){
        window.alert("Erro");
        return;
    }

    localStorage.setItem("age",age);
    let input = document.getElementById("age")
    input.value = "";
    input.placeholder = "Salvo!"
    
    setTimeout(() => {
        input.placeholder = "Digite sua idade"; 
    }, 2000);

}

let mostrar = document.getElementById("mostrar")
mostrar.addEventListener("click",show)

function show(){
    let text = document.getElementById("text");
    let value = localStorage.getItem("age");
    text.innerText = "Sua idade é: " + value + " anos";
}