/* O administrador do sistema precisa ter controle sobre as mensagens exibidas. Além
de adicionar novas mensagens, ele também deve conseguir remover a última
mensagem criada.
Requisitos
• Botão Adicionar Mensagem.
• Botão Remover Mensagem.
• Utilizar appendChild() para adicionar.
• Utilizar removeChild() para remover.
• Caso não existam mensagens, não gerar erros. */

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let title = document.getElementById("title");
    let p = document.createElement("p");
    p.innerText = `Bem-Vindo`;

    title.appendChild(p);
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",remover)

function remover(){
    let title = document.getElementById("title");
    let ultimo = title.lastElementChild;

    if(!ultimo){
        window.alert("Erro")
    }
    else{
        title.removeChild(ultimo);
    }
   
}