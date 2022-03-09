import {data} from "./data.js"
console.log(data);


// const product = document.createElement('div');
// const productPhoto = document.createElement('img');
// const productName = document.createElement('small');
// const productPrice = document.createElement('a');

// const increaseBtn = document.createElement('button');
// const decreaseBtn = document.createElement('button');

const filteredProducts = data.filter(data => data.stock === true);


filteredProducts.map((item,index) => {
    const productContainer = document.querySelector('.card-container');
    const product = document.createElement('div');
    product.classList.add('card');

    const productPhoto = document.createElement('img');
    productPhoto.src = item.image;
    productPhoto.style.width = "150px";

    const productName = document.createElement('small');
    productName.textContent = item.title;
    productName.style.fontSize = '1rem'

    const productPrice = document.createElement('a');
    productPrice.textContent = item.price;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons');

    const plusBtn = document.createElement('button');
    plusBtn.textContent = "+";
    plusBtn.classList.add('button')

    let count = document.createElement('p');
    count.textContent = 0;

    const minusBtn = document.createElement('button');
    minusBtn.textContent = "-";
    minusBtn.classList.add('button');

    const addProduct = document.createElement('a');
    addProduct.classList.add('add-product');
    addProduct.textContent= "Səbətə əlavə et";


    product.append(productPhoto);
    product.append(productName);
    product.append(productPrice);

    buttonContainer.append(plusBtn);
    buttonContainer.append(count);
    buttonContainer.append(minusBtn);


    product.append(buttonContainer);
    product.append(addProduct);
    productContainer.append(product);

    let myCount = 0;
    plusBtn.addEventListener('click' , () => {
      
       myCount++;
       count.textContent = myCount;
    } )

    minusBtn.addEventListener('click' , () => {
        if(myCount > 0){

           myCount--;
           count.textContent = myCount;

        }
    })


 
    addProduct.addEventListener('click' , () => {
          const sebetContainer = document.querySelector('.sebetim');
          const shoppingList = document.createElement('ol');
          const shoppingItem = document.createElement('li');
          shoppingItem.style.fontSize = "1rem";
          shoppingItem.textContent = item.title;

          shoppingList.append(shoppingItem);
          sebetContainer.append(shoppingItem);
    })

})
