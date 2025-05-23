function verificar(){
    const numero = parseInt(document.querySelector('#numero').value)
    
    if (numero % 2 == 0){  
        const h1 = document.createElement('h1')
        const texto = document.createTextNode(`O número é par.`)
        h1.appendChild(texto)
        document.body.appendChild(h1)
    }else{
        const h1 = document.createElement('h1')
        const texto = document.createTextNode(`O número é impar.`)
        h1.appendChild(texto)
        document.body.appendChild(h1)
    }

}