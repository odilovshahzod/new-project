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
    let nav_list__item= document.querySelectorAll('.nav-list__item');
    let vendors__item = document.querySelectorAll('.vendors__item');
    let header__menu_btn = document.querySelector('.header__menu-btn');
    let burger_btn = document.querySelectorAll('.burger_btn');
    let nav_list_active = document.querySelector('.nav-list');
    console.log(swiper_pagination[5].className);

    let btn_info=true
    header__menu_btn.addEventListener('click',()=>{
        if(btn_info){
            burger_btn[2].style=' top: 0px; transform: rotate(45deg);';
            burger_btn[1].style='left:-160% ; opacity: 0;';
            burger_btn[0].style='bottom: -5px; transform: rotate(-45deg); ';
            btn_info=false
        }
        else{
            burger_btn[2].style=' top: 0px transform: rotate(0);';
            burger_btn[1].style='left:0; opacity: 1;';
            burger_btn[0].style='bottom:0; transform: rotate(0); ';
            btn_info=true
        }
        nav_list_active.classList.toggle('active')
    })

    for (let i = 0; i < nav_list__item.length; i++) {
        nav_list__item[i].addEventListener('mouseenter',()=>{
            nav_list__item[i].classList.add('item--active')
        } )

    nav_list__item[i].addEventListener('mouseleave',()=>{
            nav_list__item[i].classList.remove('item--active')
        })
    }

    for(let i=0 ; i< products__get.length; i++){
        products__get[i].addEventListener('click',()=>{
        aplication.classList.add('block')
        aplication.classList.remove('none')                
            })
    }
    // ----------------------------
    for (let i = 0; i < filter_btn.length; i++) {
           filter_item_before[0].classList.add('active')
            filter_btn[i].addEventListener('click',()=>{
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
    },3000 )

    let vendors__item_width = vendors__item[0].clientWidth;
    if(window.innerWidth<1200){
        setInterval(
            function(){
                    setTimeout( function(){ 
                            top_reveal.style= `left:0`;
                                 swiper_pagination[5].classList.remove('active');
                                 swiper_pagination[2].classList.add('active');
                        },900)

                    setTimeout( function(){ 
                            top_reveal.style=`left:-`+vendors__item_width+`px`;
                                 swiper_pagination[2].classList.remove('active');
                                 swiper_pagination[3].classList.add('active');
                        },2000)

                    setTimeout( function(){ 
                            top_reveal.style=`left:-`+(2*vendors__item_width)+`px`;
                                 swiper_pagination[3].classList.remove('active');
                                 swiper_pagination[4].classList.add('active');
                        },3000)

                    setTimeout( function(){ 
                            top_reveal.style=`left:-`+(3*vendors__item_width)+`px`;
                                 swiper_pagination[4].classList.remove('active');
                                 swiper_pagination[5].classList.add('active');
                        },4000)
            },5000 )
    }

    if(window.innerWidth>=1200){
        setInterval(
            function(){
                    setTimeout( function(){
                         top_reveal.style=`left:0`;
                            swiper_pagination[4].classList.remove('active');
                            swiper_pagination[2].classList.add('active');
                        },900)
                    setTimeout( function(){
                         top_reveal.style=`left:-`+vendors__item_width+`px`;
                            swiper_pagination[2].classList.remove('active');
                            swiper_pagination[3].classList.add('active');
                        },2000)
                    setTimeout( function(){
                         top_reveal.style=`left:-`+(2*vendors__item_width)+`px`;
                            swiper_pagination[3].classList.remove('active');
                            swiper_pagination[4].classList.add('active');
                        },3500)

            },4000 )
    }

    aplication_btn.addEventListener('click',()=>{
        aplication.classList.add('none')
    })  

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