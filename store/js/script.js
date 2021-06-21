const header = document.getElementById('header');
const workTime = document.getElementById('workTime');
const openMes = document.querySelector('.openMes');
const closeMes = document.querySelector('.closeMes');

function checkScrollAndHeader(){
    let scrollY = window.pageYOffset;

    if(scrollY > 500){
        header.classList.add('header_fixed');
    }
    else{
        header.classList.remove('header_fixed');
    }
}

function showOpen(){
    openMes.classList.add('openMes_active');
    // delete 
    setTimeout(() => {
        openMes.classList.remove('openMes_active');
    }, 5000);
}

function showExit(){
    closeMes.classList.add('closeMes_active');
    // delete 
    setTimeout(() => {
        closeMes.classList.remove('closeMes_active');
    }, 5000);
}

document.addEventListener('DOMContentLoaded',checkScrollAndHeader)
window.addEventListener('scroll',checkScrollAndHeader);


workTime.addEventListener('mouseover', function(){
   let date = new Date();

   if(date.getHours() >= 9 && date.getHours()< 18){
    showOpen();
   }
   else if(date.getHours() == 18){
       if(date.getMinutes() == 0){
        showOpen();
       }
       else{
        showExit();
       }
   }
   else{
    showExit();
   }

})