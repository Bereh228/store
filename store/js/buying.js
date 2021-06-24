const collectionItems = document.querySelector('.items__wrapper');
const goodsCountPanel = document.querySelector('.goods__count-panel');
const afterAddGoods = document.querySelector('.success__purchase');

const goodsName = document.querySelector('.goods__name');
const goodsPrice = document.querySelector('.goods__price');
const goodsImg = document.querySelector('.goods-i');

const countGoods = document.getElementById('count-goods');
const sumaPayElement = document.querySelector('.shopcart-suma');
let sumaPay = 0;

let dataObj = {
    price: 0,
    count: 1
}

collectionItems.addEventListener('click',function(event){
    let img;
    let price;
    if(event.target.classList.contains('button__buy-goods')){
        document.querySelector('.shopcart').classList.remove('shopcart_active');

        price = event.target.previousElementSibling.firstElementChild.innerHTML;
        price = Number(price.split(' ').join(''));

        goodsPrice.innerHTML = price;
        goodsName.innerHTML = event.target.previousElementSibling.previousElementSibling.innerHTML;
        img = event.target.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling.getAttribute('src');
        

        goodsImg.src = img;
        goodsImg.previousElementSibling.setAttribute('srcset', img);

        $('#overlay, #buy__window').fadeIn('slow');
       
        dataObj.price = price;

        document.querySelector('.buy__window').addEventListener('click',function(event2){        
            if(event2.target.classList.contains('goods-plus')){
                event2.target.previousElementSibling.innerHTML++;

                dataObj.count++;
                goodsPrice.innerHTML = dataObj.price * event2.target.previousElementSibling.innerHTML;

            }
            if(event2.target.classList.contains('goods-minus')){
                if(event2.target.nextElementSibling.innerHTML!= 1){
                    event2.target.nextElementSibling.innerHTML--;
                    dataObj.count--;
                    goodsPrice.innerHTML-= dataObj.price;
                }
            }
            if(event2.target.classList.contains('button__sumbit-goods')){
                countGoods.innerHTML = Number(countGoods.innerHTML) + Number(event2.target.previousElementSibling.firstElementChild.nextElementSibling.innerHTML);

                if(Number(countGoods.innerHTML) > 9 ){
                    countGoods.style.right = '7px';
                }

                let item = document.querySelector('.shop-item').cloneNode(true);
                item.firstElementChild.firstElementChild.firstElementChild.setAttribute('srcset',img);
                item.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.setAttribute('src',img);
                item.firstElementChild.nextElementSibling.firstElementChild.innerHTML = 'Название: '+ goodsName.innerHTML;
                item.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = 'Сумма: ' + (dataObj.price * dataObj.count) + ' грн.';
                item.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = 'Количество: ' + dataObj.count + ' шт.';
                
                item.classList.add('shop-item_added');
                document.querySelector('.shop__items-wrapper').appendChild(item);

                // add suma
                sumaPay+=(dataObj.price * dataObj.count);
                sumaPayElement.innerHTML = 'Сумма к оплате: ' + sumaPay + ' грн.';

                // show button checkout
                if(sumaPay > 0){
                    $('.checkout').fadeIn();
                }

                dataObj.count = 1;

                closeOverlay();
                setTimeout(() => {
                    $('#overlay, #success__purchase').fadeIn('slow');
                }, 300);

            }
            
            event2.stopImmediatePropagation();
        })
        event.stopImmediatePropagation();
    }
})

afterAddGoods.addEventListener('click',function(event){
    if(event.target.classList.contains('button-yes')){
        $('#overlay,#success__purchase').fadeOut('slow');
    }
    else if(event.target.classList.contains('button-no')){
        $('#overlay,#success__purchase').fadeOut('slow');
        document.querySelector('.shopcart').classList.add('shopcart_active');
    }
});



