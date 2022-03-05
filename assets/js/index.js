const wrapperMask = document.querySelector('.wrapper__mask'),
      wrapperMoon = document.querySelector('.wrapper__moon'),
      openMoreBtns = document.querySelectorAll('.openMore__btn'),
      mobileMenu = document.querySelector('.mobile-menu'),
      menuBurger = document.querySelector('.menu-burger img'),
      menuClose = document.querySelector('.menu-close img'),
      mobileMenuLists = document.querySelectorAll('.mobile-menu-list'),
      openRoadmap = document.querySelector('.open-roadmap'),
      roadmap = document.querySelector('.roadmap'),
      roadmapFirst = document.querySelector('.roadmap-first'),
      locations = document.querySelectorAll('.location')
   

// openRoadmap.addEventListener('click', () => {
//     roadmap.classList.toggle('showRoadmap');
//     roadmapFirst.classList.toggle('roadmapFirst');
//     locations.forEach(el => {
//         el.style.display = 'block'
//     })
// })

let check1 = 0;
openRoadmap.addEventListener('click', () => {
        if(check1 == 0) {
            roadmap.classList.add('showRoadmap');
            roadmapFirst.classList.add('roadmapFirst');
            locations.forEach(el => {
                el.style.display = 'block'
                openRoadmap.firstChild.innerHTML = 'Exit'
                return check1 = 1;
            })
        } else {
            roadmap.classList.remove('showRoadmap');
            roadmapFirst.classList.remove('roadmapFirst');
            locations.forEach(el => {
                el.style.display = 'none'
                openRoadmap.firstChild.innerHTML = 'Enter'
                return check1 = 0;
            })
        }
    });

    roadmapFirst.addEventListener('click', () => {
        roadmapFirst.children[0].classList.toggle('showBlock')
    });
    locations.forEach(loc => {
        loc.addEventListener('click', () => {
            loc.children[0].classList.toggle('showBlock')
        })
    })


menuBurger.addEventListener('click', () => {
    mobileMenu.classList.add('showMobileMenu')
});
menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('showMobileMenu')
});

mobileMenuLists.forEach(list => {
    list.addEventListener('click', () => {
        mobileMenu.classList.remove('showMobileMenu')
    })
});


window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    wrapperMask.style.bottom = scrolled / 6 + `px`
});

$(document).ready(function() {
    $('.faq-item').click(function() {
       $(this).siblings().removeClass('showFaqItem')
       $(this).toggleClass('showFaqItem')
    });
    
});

let check = 0;
openMoreBtns.forEach(openMoreBtn => {
    openMoreBtn.addEventListener('click', () => {
        if(check == 0) {
            openMoreBtn.parentElement.previousElementSibling.classList.add('openAllInfo');
            openMoreBtn.parentElement.previousElementSibling.children[0].classList.remove('text-gradient');
            openMoreBtn.children[0].textContent = 'close'
            return check = 1;
        } else {
            openMoreBtn.parentElement.previousElementSibling.classList.remove('openAllInfo');
            openMoreBtn.parentElement.previousElementSibling.children[0].classList.add('text-gradient');
            openMoreBtn.children[0].textContent = 'more'
            return check = 0;
        }
    })
});









// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         dots: false,
//         items: 5,
//         loop: true,
//         mouseDrag: true,
//         touchDrag: true,
//         nav: false,
//         responsive: {
//             0: {
//                 items: 2,
//                 center: true,
//                 margin: 0,
//             },
//             1000: {
//                 items: 5,
//                 center: false,
//                 margin: 0,
//             }
//         }
//     });
// });
