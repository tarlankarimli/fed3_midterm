import {data} from "./data.js"

console.log(data);

const left= document.querySelector('.left')



const rendercards =()=> {

data.map((card) => {
    
    const cardItem=document.createElement('div');
    const img=document.createElement('img');
    const title=document.createElement('div');
    const content=document.createElement('div');
    const price=document.createElement('div');
    const button=document.createElement('button')

    cardItem.className='card';
    img.className= 'img';
    title.className= 'title';
    content.className= 'content';
    price.className= 'price';
    button.className='button'



    img.setAttribute('src',card.image);
    title.textContent=card.title;
    content.textContent=card.content;
    price.textContent=card.price;
    button.textContent='əlavə et'
    cardItem.append(img,title,content,price,button);
    left.append(cardItem);

})
}

rendercards()
