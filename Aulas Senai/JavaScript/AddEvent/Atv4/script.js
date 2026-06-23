let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("coordenadas")

btn1.addEventListener("click", function() {
    window.addEventListener("mousemove", ativar);
})

function ativar(e) {
    let x = e.clientX;
    let y = e.clientY; 
    p.innerText = `X: ${x}, Y: ${y}`; 
}

btn2.addEventListener("click", function() {
    window.removeEventListener("mousemove", ativar);
})