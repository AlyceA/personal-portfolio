const nav = document.querySelector('.nav-list')
const hamburger = document.querySelector('.hamburger')
const add = document.querySelector('.add')
const x = document.querySelector('.close')
const navLinks = document.querySelectorAll('.navLink')

hamburger.addEventListener('click', toggleNav)

navLinks.forEach(
    function(navLink) {
        navLink.addEventListener('click', toggleNav)
    }
)

function toggleNav() {
    if (nav.classList.contains('showNav')) {
        nav.classList.remove('showNav')
        x.style.display = 'none'
        add.style.display = 'block'
    } else {
        nav.classList.add('showNav')
        x.style.display = 'block'
        add.style.display = 'none'
    }
}