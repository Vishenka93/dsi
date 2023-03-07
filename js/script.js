"use strict"

const burger = document.querySelector(".icon-menu"),
      headerMenu = document.querySelector('.header__menu');

      if(burger) {

        burger.addEventListener('click', (event) => {
               burger.classList.toggle("_active");
               headerMenu.classList.toggle('_active');
               document.body.classList.toggle('_lock'); 
            
        });
      }

      const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        document.body.classList.add('_touch');
    
        let menuArrows = document.querySelectorAll('.menu-arrow');
        if (menuArrows.length > 0) {
            for (let index = 0; index < menuArrows.length; index++) {
                const menuArrow = menuArrows[index];
                menuArrow.addEventListener("click", function (e) {
                    menuArrow.parentElement.classList.toggle('_active');
                });
            }
        }
    
    } else {
        document.body.classList.add('_pc');
    }


    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;
    
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }


    const header = document.querySelector(".header");
    
    /**
     * Слушаем событие прокрутки
     */
    window.addEventListener('scroll', e => {
      if(pageYOffset > 100) {
        header.classList.add("_scroll-header");
      } else {
        header.classList.remove("_scroll-header");
      }
    })














    //   if( window.innerWidth <= 998.98 ){
    //     document.body.classList.toggle(".touch")
    //     let menuArrow = document.querySelectorAll(".menu-arrow");
    //     if (menuArrow.length > 0) {
    //         for(let i = 0; i <= menuArrow.length; i++) {
    //             const menuArrow = menuArrow[i];
    //             menuArrow.addEventListener("click", (e) => {
    //                 menuArrow.parentElement.classList.toggle("_active");
    //             })
    //         }
    //     }

    //   } 



//       const item = document.querySelectorAll(".header__item"),
//             subList = document.querySelectorAll(".menu__sub-list");


// for(let i = 0; i > item.length; i++) {
//     item[i].addEventListener('click', (e) => {
//         if(item[i].closest('.menu__sub-list')) {
//             item[i].classList.toggle("_show");
//             subList.classList.toggle("_show");
//         }
//     }) 
// }


            
                
            

//       const item = document.querySelectorAll('.icons-main-block__item');
      

// function moveItem(item, coff) {
//     window.addEventListener('mousemove', (e) => { 
//         let x = e.clientX / window.innerWidth;
//         let y = e.clientY / window.innerHeight;     
//         item.style.transform = 'translate(-' + x * coff + 'px, -' + y * coff + 'px)';
//     }); 
// }
// moveItem();

// let min = 10,
//       max = 100;

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   let coff = getRandomArbitrary(min, max);




//alert( Math. round(coff));

// программу для запсиси людей в кинотеатр

// зеленого свободно
// красный занятый
// желтый резерв





