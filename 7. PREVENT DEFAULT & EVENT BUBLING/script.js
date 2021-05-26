// // Karena close diganti menggunakan element 'a' yang merupakan sebuah link maka ketika di klik kan terjadi kedipan seperti di refresh. padahal kita tidak ingin kedipan itu ada. Maka dari itu kita tambahkan method .preventDefault() agat kedipan atau default pada element 'a' tidak terjadi


// const close = document.querySelectorAll('.close');
// close.forEach(function(e) {
//     e.addEventListener('click', function(el){
//         // Target parentnya
//         el.target.parentElement.style.display = 'none';
//         el.preventDefault();
//         // untuk mencegah event bubling masukkan method .stopPropagation
//         el.stopPropagation();
//     });
// });

// // memberikan event handling pada parent element close. tapi masalahnya ketika close di klik, cardnya akan ikut jalan atau disebut event bubbling
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(e){
//     e.addEventListener('click', function(el){
//             alert('ok');
//     });
// });


// CARA YANG LEBIH MUDAH UNTUK TRAVERSAL
// Berikan perlakuan pada bungkus besarnya lalu cari elemen yang dingin diberi perlakuan dengan .target.className == 'nama class target'
// Cara ini sangat berfungsi jika ada penambahan element HTML yang tidak dilakukan di dalam file HTML atau melalui javascript. Sehingga fungsi di bawah tetap bisa berjalan
const container = document.querySelector('.container');
container.addEventListener('click',function(e){
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});
