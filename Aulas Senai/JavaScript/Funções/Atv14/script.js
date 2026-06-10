//Crie uma função que verifique se um número é primo (retorne boolean).
function primo(num){

    if(num <= 1){
        return false
    }

    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true

}
console.log(primo(7))