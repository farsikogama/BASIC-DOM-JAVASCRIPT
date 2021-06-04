//DOM SELECTION
//document.getElementById() -> mengembalikan element

// create variable untuk menampung doc nya. pakai const i/o var supaya ga berubah
const judul = document.getElementById('judul') // mengembalikan element

// contoh merubah warna dengan js
judul.style.color = 'red' //rubah warna text
judul.style.backgroundColor = '#eaeaea' //rubah background
judul.innerHTML = 'Farsiko Gama' //rubah text

// Document.getElementsByTagName(). Mesti pakai index untuk manggil element yg dimau karena get elements by tag name bentuknya BUKAN array. Ga bisa di forEach dan method array yang lainnya tapi bisa di loop. Klo ga mau jadi array, pas panggil tag name panggil pakai query selector
// HTML Colection
const p = document.getElementsByTagName('p') // mengembalikan HTML Collection - Bukan Array,
// rubah warna jadi merah untuk elemtn pe index[2]
p[2].style.backgroundColor = 'red'

// rubah semua warna p jadi light blue pakai loop for
for (i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue'
}

// rubah semua warna p jadi light blue pakai foreach - tapi harus pakai document.querySelectorAll
// console.log(p)
// p.forEach(function (e, i) {
//   console.log(e, i)
//   e.style.backgroundColor = 'lightblue'
// })

// document.getElementsByClassName() - bentuknya HTML Collection, jadi harus dipanggil menggunakan index
const p1 = document.getElementsByClassName('p1') // mengembalikan HTML Collection - Bukan Array. Jaid ga bisa di forEach tapi bisa di loop for

p1[0].innerHTML = prompt('masukkan sembarang')
