function checar(){
    const idade = parseInt(document.querySelector('#idade').value)

    if(idade >=18){
        const h1 = document.createElement('h1')
        const texto = document.createTextNode(`Maior de idade.`)
        h1.appendChild(texto)
        document.body.appendChild(h1)

    }else{
        const h1 = document.createElement('h1')
        const texto = document.createTextNode(`Menor de idade.`)
        h1.appendChild(texto)
        document.body.appendChild(h1)
    }   
}