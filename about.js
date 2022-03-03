window.addEventListener('DOMContentLoaded',function(){
    let right_reveals = document.querySelectorAll('.right_reveal');
    let left_reveals = document.querySelectorAll('.left_reveal');
    let top_reveal = document.querySelector('.vendors__list');
    let mySwiper = document.querySelector('.swiper-swapper');
    let swiper_pagination = document.querySelectorAll('.swiper-pagination-bullet');
    let filter_btn = document.querySelectorAll('.filter-btn');
    let products_part = document.querySelectorAll('.products-part');
    let filter_item_before = document.querySelectorAll('.filter-item');
    let aplication_btn = document.querySelector('.aplication-btn');
    let aplication = document.querySelector('.aplication');
    let products__get= document.querySelectorAll('.products__get');

    
    aplication_btn.addEventListener('click',()=>{
        aplication.classList.add('none')
    })
    for(let i=0 ; i< products__get.length; i++){
        products__get[i].addEventListener('click',()=>{
        aplication.classList.add('block')
        aplication.classList.remove('none')                
            })
    }

for (let i = 0; i < filter_btn.length; i++) {
                    filter_item_before[0].classList.add('active')
            filter_btn[i].addEventListener('click',()=>{
                console.log('salom');
                    filter_item_before[0].classList.remove('active')
                    filter_item_before[1].classList.remove('active')
                    filter_item_before[2].classList.remove('active')
                    filter_item_before[i].classList.add('active')

                    products_part[0].classList.add('none')
                    products_part[1].classList.add('none')
                    products_part[2].classList.add('none')
                    products_part[i].classList.remove('none')
    })
        }
    setInterval(
         mySwipper=()=>{
                mySwiper.classList.toggle('mySwiper')
                swiper_pagination[0].classList.toggle('active')
                swiper_pagination[1].classList.toggle('active')
    },3000
    )

    setInterval(
        function(){
                    setTimeout( function(){ top_reveal.style=`left:0`},1000)
                    setTimeout( function(){ top_reveal.style=`left:-24%`},3000)
                    setTimeout( function(){ top_reveal.style=`left:-50%`},5000)
        },6000
    )

 
                top_reveal.style=`left:0`;
    window.addEventListener('scroll',()=>{
            top_reveal.classList.add('active');

        for (let i = 0; i < right_reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let right_revealTop = right_reveals[i].getBoundingClientRect().top;
            let right_revealPoint=50;

            if(right_revealTop < windowHeight - right_revealPoint){
                right_reveals[i].classList.add('active')
            } 
        }
        for (let i = 0; i < left_reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let left_revealTop = left_reveals[i].getBoundingClientRect().top;
            let left_revealPoint=50;

            if(left_revealTop < windowHeight - left_revealPoint){
                left_reveals[i].classList.add('active')
            } 
        }

    })
 

})