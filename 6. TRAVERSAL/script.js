// Untuk satu kartu
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });


// Cara 1 untuk banyak kartu
// const close = document.querySelectorAll('.close');
// close.forEach(function(e) {
//     e.addEventListener('click', function(){
//     e.parentElement.style.display = 'none';
// });
// });

//Cara dua untuk banyak kartu
const close = document.querySelectorAll('.close');
close.forEach(function(e) {
    e.addEventListener('click', function(el){
    // Target parentnya
    el.target.parentElement.style.display = 'none';
});
});

// Jenis2 Paarent :
// parentNode - mengembalikan node
// parentElement - mengembalikan Element
// nextSibling - mengembalikan node
// nextElementSibling - mengembalikan node
// previousSibling - mengembalikan node
// previousElementSibling - mengembalikan node


const nama = document.querySelector('.nama')
console.log(nama.parentElement);
console.log(nama.parentElement.parentElement);
console.log(nama.parentNode);
// mengambil apapapun SETELAH nama
console.log(nama.nextSibling);
console.log(nama.nextElementSibling);
// mengambil apapapun SEBELUM nama
console.log(nama.previousSibling);
console.log(nama.previousElementSibling);