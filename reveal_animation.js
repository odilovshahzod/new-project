    let right_reveals = document.querySelectorAll('.right_reveal');
    let left_reveals = document.querySelectorAll('.left_reveal');
    let top_reveal = document.querySelector('.vendors__list');
    let filter_item_before = document.querySelectorAll('.filter-item');
    let aplication_btn = document.querySelector('.aplication-btn');
    let aplication = document.querySelector('.aplication');
    let products__get= document.querySelectorAll('.products__get');
    let nav_list__item= document.querySelectorAll('.nav-list__item');
    let vendors__item = document.querySelectorAll('.vendors__item');
    let header__menu_btn = document.querySelector('.header__menu-btn');
    let burger_btn = document.querySelectorAll('.burger_btn');
    let nav_list_active = document.querySelector('.nav-list');
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

        window.addEventListener('scroll',()=>{
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