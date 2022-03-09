// fetch("./data.json")
// .then((file => file.json)).then(res=>console.log(res))
import {data} from "./data.js"
console.log(data)
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const rightHeading =document.createElement("h3")
rightHeading.textContent = "Səbət"
right.append(rightHeading)
rightHeading.className = "sebet"


const renderData = ()=>{
    data.map((obj,index)=>{
        if(obj.stock == true){
        const card = document.createElement("div")
        const imgDiv = document.createElement("div")
        const img = document.createElement("img")
        const price = document.createElement("span")
        const content = document.createElement("p")
        const cardHeading = document.createElement("h3")
        const leftRight = document.createElement("div")
        const leftBtn = document.createElement("span")
        const rightBtn = document.createElement("span")
        const count = document.createElement("span")
        count.textContent = "1"
        leftBtn.className= "buttons"
        left.append(card)
        card.append(imgDiv)
        card.append(img,cardHeading,price, content,leftRight)
        leftRight.append(leftBtn)
        leftRight.append(count)
        leftRight.append(rightBtn)
        leftBtn.className = "buttons"
        rightBtn.className= "buttons"
        card.className = "card"
        img.className= "images"
        cardHeading.className = "cardHeading"
        content.className = "content"
        leftBtn.textContent= "-"
        rightBtn.textContent= "+"
        cardHeading.textContent = data.title
        content.textContent = obj.content
        price.textContent = obj.price

        img.setAttribute("src", obj.image)
        }
    })
}
renderData()
