const collectionItems = document.querySelector('.items__wrapper');
const goodsCountPanel = document.querySelector('.goods__count-panel');

collectionItems.addEventListener('click',function(event){
    let img;
    let name;
    let price;
    if(event.target.tagName === 'BUTTON'){
        price = event.target.previousElementSibling.innerHTML;
        name = event.target.previousElementSibling.previousElementSibling.innerHTML;
        img = event.target.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling.getAttribute('src');
        
        alert(`Source img: ${img}\nName: ${name}\nPrice: ${price}`);
    }
})

goodsCountPanel.addEventListener('click',function(event){
    if(event.target.classList.contains('goods-plus')){
        event.target.previousElementSibling.innerHTML++;
    }
    if(event.target.classList.contains('goods-minus')){
        if(event.target.nextElementSibling.innerHTML!= 0){
            event.target.nextElementSibling.innerHTML--;
        }
    }