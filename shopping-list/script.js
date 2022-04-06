import {data} from "./data.js"
const cartData = [];
const totalButton = document.getElementById("total-icon");

const filteredProducts = data.filter(data => data.stock === true);


filteredProducts.map((item,index) => {

    

    const productContainer = document.querySelector('.card-container');
    const product = document.createElement('div');
    product.classList.add('card');

    const productPhoto = document.createElement('img');
    productPhoto.src =  item.image;
    productPhoto.style.width = "150px";


    const productName = document.createElement('small');
    productName.textContent = item.title;
    productName.style.fontSize = '1rem'

    const productPrice = document.createElement('a');
    productPrice.textContent = `${item.price}$`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons');

    const plusBtn = document.createElement('button');
    plusBtn.textContent = "+";
    plusBtn.classList.add('button')

    let count = document.createElement('p');
    count.textContent = 1;

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

    let myCount = 1;
    plusBtn.addEventListener('click' , () => {
       myCount++;
       count.textContent = myCount;
    } )

    minusBtn.addEventListener('click' , () => {
        if(myCount > 1){

           myCount--;
           count.textContent = myCount;

        }
    })


 
    addProduct.addEventListener('click' , () => {
    
        // cartData.find(item => item.id === id)
        const itemDetails = {
            name: item.title,
            price: item.price,
            id: item.id,
            count: myCount,
            total: item.price*myCount,
        }


        checkCartData(itemDetails.id) 
        cartData.push(itemDetails);
        

          const sebetContainer = document.querySelector('.sebetim');
          const shoppingList = document.createElement('ol');
          const shoppingItem = document.createElement('li');
          shoppingItem.style.fontSize = "1rem";

          shoppingItem.textContent = `${myCount} ədəd ${itemDetails.name} - ${itemDetails.total}$`;

          shoppingList.append(shoppingItem);
          sebetContainer.append(shoppingList);
       


          totalButton.addEventListener("click" , () => {
         //getting total cost with controlling float side of a number
          const totalCost = Math.floor(cartData.reduce((total, item) => item.total + total, 0) * 100)/100;
          console.log(totalCost , "total cost")
          })

        })
 
})


const checkCartData = (id) => {
const itemA = !!cartData.find(item => item.id === id);
    console.log(itemA);
}
