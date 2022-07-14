let frutas = []
let bebidas = []
let higiene = []

let secFrutas = document.querySelector('#s1')
let tituloFrutas = document.createElement('h1')
let caixaFrutas = document.createElement('div')
let ulFrutas = document.createElement('ul')

caixaFrutas.classList.add('products-content')
tituloFrutas.innerText = 'Frutas'

secFrutas.appendChild(tituloFrutas)
secFrutas.appendChild(caixaFrutas)
caixaFrutas.appendChild(ulFrutas)

let secBebidas = document.querySelector('#s2')
let tituloBebidas = document.createElement('h1')
let caixaBebidas = document.createElement('div')
let ulBebidas = document.createElement('ul')

caixaBebidas.classList.add('products-content')
tituloBebidas.innerText = 'Bebidas'

secBebidas.appendChild(tituloBebidas)
secBebidas.appendChild(caixaBebidas)
caixaBebidas.appendChild(ulBebidas)

let secHigiene = document.querySelector('#s3')
let tituloHigiene = document.createElement('h1')
let caixaHigiene = document.createElement('div')
let ulHigiene = document.createElement('ul')

caixaHigiene.classList.add('products-content')
tituloHigiene.innerText = 'Higiene'

secHigiene.appendChild(tituloHigiene)
secHigiene.appendChild(caixaHigiene)
caixaHigiene.appendChild(ulHigiene)

function create(imagem, nome, valor, category) {
    let item = {
       image: imagem,
       title: nome,
       price: valor,
       category: category
    };
   
    return item;
}

for (let i = 0; i<products.length; i++) {
    if (products[i].category == 'Frutas') {
       frutas.push(create(products[i].image, products[i].title, products[i].price, products[i].category));
    } else if(products[i].category == 'Bebidas') {
       bebidas.push(create(products[i].image, products[i].title, products[i].price, products[i].category));
    } else {
        higiene.push(create(products[i].image, products[i].title, products[i].price, products[i].category));
    }
}

function Cards(){
   
    if(frutas.length > 0){

        for(let i = 0; i < frutas.length; i++){

            let li = document.createElement("li")
            li.classList.add("product")

            let image = document.createElement("img")
            image.src = frutas[i].image
            image.classList.add('product-img')

            let div = document.createElement("div")
            div.classList.add('product-main')

            let h1 = document.createElement("h1")
            h1.classList.add('product-title')
            h1.innerText = frutas[i].title

            let h5 = document.createElement('h5')
            h5.classList.add('product-category')
            h5.innerText = frutas[i].category

            let strong = document.createElement('strong')
            strong.classList.add('product-price')
            strong.innerText = frutas[i].price

            ulFrutas.appendChild(li)
            li.appendChild(image)
            li.appendChild(div)
            div.appendChild(h1)
            div.appendChild(h5)
            div.appendChild(strong)
        }
    }if(bebidas.length > 0){
        for(let i = 0; i < bebidas.length; i++){
            let li = document.createElement("li")
            li.classList.add("product")

            let image = document.createElement("img")
            image.src = bebidas[i].image
            image.classList.add('product-img')

            let div = document.createElement("div")
            div.classList.add('product-main')

            let h1 = document.createElement("h1")
            h1.classList.add('product-title')
            h1.innerText = bebidas[i].title

            let h5 = document.createElement('h5')
            h5.classList.add('product-category')
            h5.innerText = bebidas[i].category

            let strong = document.createElement('strong')
            strong.classList.add('product-price')
            strong.innerText = bebidas[i].price

            ulBebidas.appendChild(li)
            li.appendChild(image)
            li.appendChild(div)
            div.appendChild(h1)
            div.appendChild(h5)
            div.appendChild(strong)
        }

    }if(higiene.length > 0){
        for(let i = 0; i < higiene.length; i++){
            let li = document.createElement("li")
            li.classList.add("product")

            let image = document.createElement("img")
            image.src = higiene[i].image
            image.classList.add('product-img')

            let div = document.createElement("div")
            div.classList.add('product-main')

            let h1 = document.createElement("h1")
            h1.classList.add('product-title')
            h1.innerText = higiene[i].title

            let h5 = document.createElement('h5')
            h5.classList.add('product-category')
            h5.innerText = higiene[i].category

            let strong = document.createElement('strong')
            strong.classList.add('product-price')
            strong.innerText = higiene[i].price

            ulHigiene.appendChild(li)
            li.appendChild(image)
            li.appendChild(div)
            div.appendChild(h1)
            div.appendChild(h5)
            div.appendChild(strong)
        }
    }
}Cards()