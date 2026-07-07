let sms;
const btn = document.getElementById("btn");
btn.addEventListener("click",adicionar);

function adicionar(){
    sms = document.getElementById("sms").value;

    if(sms == ""){
        window.alert("Erro, verifique os dados");
        return;
    }

    localStorage.setItem("sms",sms);
    let input = document.getElementById("sms");
    input.value = "";
    input.placeholder = "Mensagem salva!"
    
    setTimeout(() => {
        input.placeholder = "Você já digitou uma mensagem"; 
    }, 2000);

}

window.onload = function() {
    let text = localStorage.getItem("sms")
    let input = document.getElementById("sms")

    if (text !== null) {
        input.value = text; 
    }
    
}