/* Um artista deseja criar uma galeria de quadrados coloridos. Cada clique deverá criar
um quadrado com uma cor diferente.
Requisitos
As cores devem seguir a sequência:
Vermelho
Azul
Verde
Amarelo
Após a última cor, voltar para a primeira.*/
const vetor = ["red","blue","green","yellow"]
let contador = 0
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let list = document.getElementById("visor");
    let quadrado = document.createElement("div");
    quadrado.style.width = "50px"
    quadrado.style.height = "50px"
    quadrado.style.margin = "1rem"
    quadrado.style.backgroundColor = vetor[contador]
    contador++
    if(contador > 3){
        contador = 0
    }

    list.appendChild(quadrado);
}





