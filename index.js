const dataArray = []
const rightArray = []
fetch('./data.json').then(file=>file.json()).then(data=>data.data).then(data=>{
    data.map(element => {
        if(element.stock){
            dataArray.push(element)
            
            createCard(element)
        }
    });
    // console.log(dataArray.map(e=> console.log(e.id)))
})

const leftSide = document.querySelector('.left-side')

function createCard (element){
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')
    const title = document.createElement('div')
    title.classList.add('title')
    const price = document.createElement('div')
    price.classList.add('price')

    img.setAttribute('src', element.image)
    title.textContent = element.title
    price.textContent = `${element.price} $`


    //counter buttons

    const minusBtn = document.createElement('span')
    minusBtn.setAttribute('id', 'count-low')
    minusBtn.textContent = '-'
    const countShow = document.createElement('span')
    countShow.setAttribute('id','counter')
    const plusBtn = document.createElement('span')
    plusBtn.setAttribute('id', 'count-high')
    plusBtn.textContent = '+'

    const buttonWrapper = document.createElement('div')
    buttonWrapper.classList.add('count-button')
    buttonWrapper.append(minusBtn,countShow,plusBtn)
    let counterNumber = 1
    countShow.textContent = counterNumber
    
    minusBtn.addEventListener('click', ()=>{
        if(counterNumber){
            counterNumber -= 1 
        }
        countShow.textContent = counterNumber
    })
    
    plusBtn.addEventListener('click', ()=>{
        counterNumber += 1
        countShow.textContent = counterNumber
    })

    //add button

    const addBtn = document.createElement('button')
    addBtn.textContent = 'Add'
    addBtn.classList.add('add')
    
    addBtn.addEventListener('click', e=>{
        e.preventDefault()
        
        //rendering right side

        const productName = document.createElement('span')
        const productCount = document.createElement('span')
        
        dataArray.forEach(e=> {
            const id = element.id
            
        })
    })

    card.append(img,title,price,buttonWrapper,addBtn)
    leftSide.append(card)
    
    
}

