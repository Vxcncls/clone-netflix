const header = document.querySelector('#header .container.header')

function bgBlack() {
  if (window.scrollY > 0) {
    header.classList.add('background-black')
  } else {
    header.classList.remove('background-black')
  }
}

window.addEventListener('scroll', function () {
  bgBlack()
})
