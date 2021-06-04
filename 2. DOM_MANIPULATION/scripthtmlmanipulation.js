//Element Manipulation

// 1. MERUBAH innerHTML element tertentu
const p1 = document.querySelectorAll('section#a p')
p1[0].innerHTML = 'ini dirubah di Java Script'

// MERUBAH innerHTML seluruhnya
// const p2 = document.querySelector('section#b')

// p2.innerHTML = '<div><p>paragraf</p></div>'

// 2. MERUBAH style
p1[0].style.backgroundColor = 'lightblue'

// style tapi hanya satu elemen saja yang diambil
const p3 = document.querySelector('section#b p')
p3.style.backgroundColor = 'lightgreen'

//MERUBAH Attribut pada elemen
const p4 = document.querySelectorAll('section#a p')[2]
p4.setAttribute('name', 'gama')
//cek di inspect element gimana jadinya. Tapi ini ga bisa dipakai set class kalau class nya sudah ada. jadinya akan nimpa

// MERUBAH Class
//create class nya dulu
const p5 = document.getElementsByTagName('p')[1]
p5.classList.add('biru-muda')

// Remove Class
// p5.classList.remove('p2')

// Toggle. mesti pakai index untuk manggil element yg dimau karena get elements by tag name bentuknya HTMLCollection. klo ga mau jadi HTMLCollection pas panggil tag name, panggil aja pakai query selector
const bodi = document.getElementsByTagName('body')[0]
const bodi2 = document.querySelector('body')
bodi2.classList.toggle('biru-muda')

// contoh toggle
const p6 = document.querySelector('.p2')
console.log(p6)
p6.classList.toggle('label') // dia akan menambahkan kelas toggle kalo belum ada. Dan dia akan menghapus kelas 'lable' kalau sudah ada

// item - untuk mengetahui kelas apa saja yang ada pada DOM
// coba di console => p2.classList.item

// replace class
//p2.classList.item('nama class yg akan diganti','nama class pengganti')
