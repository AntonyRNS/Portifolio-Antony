function converter(){
    const tempCel = document.querySelector('#temp').value
    const tempFah = (parseFloat(tempCel) * 1.8) + 32

    const h1 = document.createElement('h1');
    const texto = document.createTextNode(`Temperatura em Celsius: ${tempCel}, Temperatura em Fahrenreit: ${tempFah}`)

    h1.appendChild(texto)

    document.body.appendChild(h1)


}