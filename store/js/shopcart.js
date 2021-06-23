const showCart = document.getElementById('shopping-cart');
const cart = document.querySelector('.shopcart');

showCart.addEventListener('click',function(){
    cart.classList.add('shopcart_active');
})

document.querySelector('.shopcart').addEventListener('click',function(event){
    if(event.target.classList.contains('shopcart-close')){
        event.target.parentNode.classList.remove('shopcart_active');
    }
})


// let item = document.querySelector('.shop-item').cloneNode(true);
// console.log(item);

// console.log(item.firstElementChild.nextElementSibling.firstElementChild.innerHTML);



// generate img/picture
// console.log(`source: ${item.firstElementChild.firstElementChild.firstElementChild.setAttribute('srcset',img)}`);
// console.log(`img: ${item.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.setAttribute('src',img)}`);

// generate name
// console.log(item.firstElementChild.nextElementSibling.firstElementChild.innerHTML);

// generate price
// console.log(item.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML);

// generate count
// console.log(item.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerHTML);
