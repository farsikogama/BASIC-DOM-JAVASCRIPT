//HTML Manipulation

// MERUBAH style
const p1 = document.querySelectorAll('section#a p');
p1[0].style.backgroundColor = 'lightblue';
p1[1].style.backgroundColor = 'lightblue';

// style tapi hanya satu elemen saja yang diambil
const p4 = document.querySelector('section#b p');
p4.style.backgroundColor = 'lightgreen';



// MERUBAH innerHTML
p1[0].innerHTML = 'ini dirubah di Java Script';
p4.innerHTML = 'ini juga dirubah di Java Script';



//Merubah Atribut pada elemen
const p3 = document.querySelectorAll('section#a p')[2];
p3.setAttribute('name','gama');
//tapi ini ga bisa dipakai set class kalau class nya sudah ada. jadinya akan nimpa



// Add Class
//create class nya dulu
const p2 = document.getElementsByTagName('p')[1];
p2.classList.add('label');



// Remove Class
p2.classList.remove('p2');



// Toggle. mesti pakai index untuk manggil element yg dimau karena get elements by tag name bentuknya array. klo ga mau jadi array pas panggil tag name, panggil aja pakai query selector
const bodi = document.getElementsByTagName('body')[0];
const bodi2 = document.querySelector('body');


// item
// coba di console => p2.classList.item


// replace class
//p2.classList.item('nama class yg akan diganti','nama class pengganti')
