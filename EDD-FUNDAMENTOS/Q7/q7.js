function calcular_salario(){
    const salario = parseFloat(document.querySelector('#salario').value)
    const meses = parseInt(document.querySelector('#meses').value)

    const resultado = salario * meses

    const h1 = document.createElement('h1')
    const texto = document.createTextNode(`Salário: ${resultado}`)


    h1.appendChild(texto)
    document.body.appendChild(h1)
}