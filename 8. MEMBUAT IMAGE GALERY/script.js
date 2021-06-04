const container = document.querySelector('.container')
const besar = document.querySelector('.besar')
const thumb = document.querySelectorAll('div.thumb img')

container.addEventListener('click', function (e) {
  if (e.target.className == 'kecil') {
    // pakai biasa
    besar.src = e.target.src
    // pakai traversal - alias dom penelusuran
    // e.target.parentElement.previousElementSibling.src = e.target.src;

    // untuk ngasih effect active setelah dipilih
    thumb.forEach(function (eee) {
      if (eee.classList.contains('active')) {
        eee.classList.remove('active')
      }
      eee.className = 'kecil'
    })
    e.target.classList.add('active')
  }
})
