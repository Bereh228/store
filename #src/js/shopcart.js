const showCart = document.getElementById('shopping-cart');
const cart = document.querySelector('.shopcart');
const shopElements = document.querySelector('.shop__items-wrapper');
const checkOutBlock = document.querySelector('.checkout-block');
const afterCkeckOutButton = document.querySelector('.backToStore');

let objAboutGoods = {
    price: 0,
    count: 0
}

// show shopCart
showCart.addEventListener('click',function(){
    cart.classList.add('shopcart_active');
})

// close shopCart
document.querySelector('.shopcart').addEventListener('click',function(event){
    if(event.target.classList.contains('shopcart-close')){
        event.target.parentNode.classList.remove('shopcart_active');
    }
})

// delete goods
shopElements.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-goods')){
        event.target.parentNode.parentNode.classList.add('shop-item_deletted');

        let priceThis = event.target.previousElementSibling.previousElementSibling.innerHTML.split(' ');
        let countThis = event.target.previousElementSibling.innerHTML.split(' ');

        objAboutGoods.price = Number(priceThis[1]);
        objAboutGoods.count = Number(countThis[1]);

        // get genSuma
        let Suma = document.querySelector('.shopcart-suma').innerHTML.split(' ');
        Suma = Suma[3];
        Suma-=objAboutGoods.price;
        sumaPay-=objAboutGoods.price;

        // delete element from shopCart
        setTimeout(()=>{
            event.target.parentNode.parentNode.remove();
        }, 300)

        // -- count goods
        countGoods.innerHTML = Number(countGoods.innerHTML) - objAboutGoods.count;

        const sumaHTML = document.querySelector('.shopcart-suma');
        sumaHTML.innerHTML = `Сумма к оплате: ${Suma} грн.`;

        // if == 0 => CLOSE SHOPCART
        if(sumaPay === 0){
            $('.checkout').fadeOut();
            setTimeout(() => {
                cart.classList.remove('shopcart_active');
            }, 300);
        }
    }
})

// listener on cart
cart.addEventListener('click',function(event){
    if(event.target.classList.contains('checkout')){
        cart.classList.remove('shopcart_active');
        $('#overlay, #ckeckout-block').fadeIn('slow');

    }
    event.stopImmediatePropagation();
})

// checkOutBlock.addEventListener('click',function(event){
//     if(event.target.classList.contains('valide-purchase')){
//         $('.checkout-block').fadeOut();
//         setTimeout(() => {
//             $('.afterCkecout').fadeIn();
//         }, 300);
//     }
// })

afterCkeckOutButton.addEventListener('click',()=>{
    $('#overlay, #afterCkecout').fadeOut();
});
















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
