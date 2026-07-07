let salvar = document.getElementById("salvar")
salvar.addEventListener("click",add)
let place = document.getElementById("nameU")
let name;

function add(){
    name = document.getElementById("nameU").value.trim()

    if(name == ""){
        place.placeholder = "Quem é você bro?"
        place.placeholder.color = "red"
        return
    }

    localStorage.setItem("nameU",name);
    console.log(name)

}

let show = document.getElementById("nameM")
show.addEventListener("click",nome)

function nome(){
    if(localStorage.getItem("nameU") == null){
        window.alert("Que mirra bobo");
        return;
    }

    let nomeSalvo = localStorage.getItem("nameU")
    let p = document.getElementById("resultado")
    p.innerText = nomeSalvo

    console.log(p)
}





