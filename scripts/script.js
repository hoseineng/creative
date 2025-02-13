const headerToggleIcon = document.querySelector('.header__toggle-icon')
const mobileMenu = document.querySelector('.mobile-menu')

headerToggleIcon.addEventListener('click', function () {
    this.classList.toggle('header__toggle-icon--open')
    mobileMenu.classList.toggle('mobile-menu--open')
})
