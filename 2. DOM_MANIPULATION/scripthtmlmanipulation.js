//Element Manipulation - Latihan
// - Rubah judul semua
// - Rubah isi paragraf pertama - inner HTML
// - Tambahkan class untuk paragraf 3 sectionA - classList.add
// - Tambahin attribute untuk aragaf 2 sectionB - setAttribute
// - Toggle kelas paragraf 3 sectionB - classList.toggle
// - cek apakah paragraf memiliki class tertentu - classList.Contain

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
//p2.classList.replace('nama class yg akan diganti','nama class pengganti')

// glosary
// classList.item(index); // Returns the item in the list by its index, or undefined if index is greater than or equal to the list's length
// classList.contains(token); // Returns true if the list contains the given token, otherwise false.
// classList.add(token1[, ...tokenN]); // Adds the specified token(s) to the list.
// classList.remove(token1[, ...tokenN]); // Removes the specified token(s) from the list.
// classList.replace(oldToken, newToken); // Replaces token with newToken.
// classList.supports(token); // Returns true if a given token is in the associated attribute's supported tokens.
// classList.toggle(token[, force]); // Removes token from the list if it exists, or adds token to the list if it doesn't. Returns a boolean indicating whether token is in the list after the operation.
// classList.entries(); // Returns an iterator, allowing you to go through all key/value pairs contained in this object.
// classList.forEach(callback[ ,thisArg]); // Executes a provided callback function once per DOMTokenList element.
// classList.keys(); // Returns an iterator, allowing you to go through all keys of the key/value pairs contained in this object.
// classList.values(); // Returns an iterator, allowing you to go through all values of the key/value pairs contained in this object.
