function comparar(){
    const str1 = document.querySelector('#string1').value
    const str2 = document.querySelector('#string2').value


    if (str1 === str2) {
        const h1 = document.createElement('h1')
        const texto = document.createTextNode(`As strings são iguais.`)
        h1.appendChild(texto)
        document.body.appendChild(h1)

    }else{
        const h1 = document.createElement('h1')
        const texto = document.createTextNode(`As strings são diferentes.`)
        h1.appendChild(texto)
        document.body.appendChild(h1)
    }
}