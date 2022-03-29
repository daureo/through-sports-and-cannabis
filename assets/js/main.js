// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};



//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if (this.scrollY >= 15) {
        headerElement.classList.add('activated');

    } else {
        headerElement.classList.remove('activated');

    }

};

window.addEventListener('scroll', scrollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
const searchIcon = selectElement('#search-icon');
const searchCloseIcon = selectElement('#form-close-btn');
const searchForm = selectElement('#search-form-container');

const toggleSearch = () => {
    searchForm.classList.toggle('activated');
}

searchIcon.addEventListener('click', toggleSearch);
searchCloseIcon.addEventListener('click', toggleSearch);

// -- Close the search form popup on ESC keypress

window.addEventListener('keyup', event => {
    if (event.key === 'Escape') searchForm.classList.remove('activated');
});

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currenTheme = localStorage.getItem('currentTheme');

if (currenTheme) {
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
})
// Swiper
const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
})
