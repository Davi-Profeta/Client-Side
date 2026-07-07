let color;
const btn = document.getElementById("btn");
btn.addEventListener("click", colors)

function colors(){
    color = document.getElementById("color").value;

    if(color == ""){
        window.alert("Erro, verifique os dados");
    }

    localStorage.setItem("color",color);
    let input = document.getElementById("color");
    input.value = "";
    input.placeholder = "Cor salva!";

    setTimeout(() => {
        input.placeholder = "Digite sua cor favorita";
    }, 2000);

}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", mostrar);

function mostrar(){
    let text = document.getElementById("text");
    let valor = localStorage.getItem("color");
    text.innerText = "Sua cor favorita é " + valor;
}