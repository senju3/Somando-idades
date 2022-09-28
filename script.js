const idades = [26, 21, 25, 33, 45, 50]
let sum = 0
const body = document.querySelector("#body")

for(let idade of idades){
    sum += idade  
}
const resultado = document.createElement('h1')
resultado.innerText = `A soma é ${sum}`
body.appendChild(resultado)