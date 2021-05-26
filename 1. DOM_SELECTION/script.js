//DOM SELECTION
//document.getElementById() -> mengembalikan element

// create variable untuk menampung doc nya. pakai const i/o var supaya ga berubah
const judul = document.getElementById('judul') // mengembalikan element

// contoh merubah warna dengan js
judul.style.color = 'red' //rubah warna text
judul.style.backgroundColor = '#eaeaea' //rubah background
judul.innerHTML = 'Farsiko Gama' //rubah text

// Document.getElementByTagName(). mesti pakai index untuk manggil element yg dimau karena get elements by tag name bentuknya array. klo ga mau jadi array pas panggil tag name, panggil aja pakai query selector
// HTML Colection
const p = document.getElementsByTagName('p') // mengembalikan HTML Collection - Bukan Array, ga bisa di forEach tapi bisa di loop
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

// document.getElementsByClassName() - bentuknya array, jadi harus dipanggil menggunakan index
// HTML Collection
const p1 = document.getElementsByClassName('p1') // mengembalikan HTML Collection - Bukan Array. Jaid ga bisa di forEach tapi bisa di loop for

p1[0].innerHTML = prompt('masukkan sembarang')
