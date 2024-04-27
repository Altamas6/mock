let container = document.querySelector(".container")
let getdata = function(URL){
    fetch(URL)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res)
        showdata(res)
    })
}

function showdata(arr){
    container.innerHTML=null
    arr.forEach(ele => {
        let cont = document.createElement('div')
        let img = document.createElement('img')
        img.src = ele.image

        let title = document.createElement('h3')
        title.innerText = ele.title

        let price = document.createElement('p')
        price.innerText = ele.price
        
        let desc = document.createElement('p')
        desc.innerText = ele.description

        cont.append(img,title,price)
        container.append(cont)
    });

}
let select = document.querySelector("select")

function catItem(){
    let cat = select.value
    let URL = 'https://fakestoreapi.com/products/category/${cat}'
    getdata(URL)
}
select.addEventListener("change",catItem)

getdata('https://fakestoreapi.com/products')