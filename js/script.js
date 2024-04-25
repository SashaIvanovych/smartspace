const swiper = new Swiper('.body-main-block__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.body-main-block__arrow',
        prevEl: '.body-main-block__arrow',
    },

});

const tabButtons = document.querySelectorAll('.tabs-deals__button');
const tabContents = document.querySelectorAll('.tabs-deals__item');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const clickedIndex = Array.prototype.indexOf.call(tabButtons, button);
        tabContents[clickedIndex].classList.add('active');
    });
});