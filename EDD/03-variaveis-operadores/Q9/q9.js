function processar(){
    const d1 = document.querySelector('#decisao1').value
    const b1 = d1==='true'? true:false
    const d2 = document.querySelector('#decisao2').value
    const b2 = d2==='true'? true:false

    const resultado1 = b1&&b2
    const resultado2 = b1 || b2
    const resultado3a = !b1
    const resultado3b = !b2


    const h1 = document.createElement('h1')
    const texto1 = document.createTextNode(`And: ${resultado1}`)
    const texto2 = document.createTextNode(`Or: ${resultado2}`)
    const texto3 = document.createTextNode(`Pimeiro valor negado: ${resultado3a}`)
    const texto4 = document.createTextNode(`Segundo valor negado: ${resultado3b}`)

    h1.appendChild(texto1)
    h1.appendChild(texto2)
    h1.appendChild(texto3)
    h1.appendChild(texto4)
    document.body.appendChild(h1)
}