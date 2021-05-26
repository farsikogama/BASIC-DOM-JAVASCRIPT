//UBAH WARNA BUTTON
const ubah = document.querySelector('#tUbahWarna');
ubah.addEventListener ('click',function(){
    // document.body.style.backgroundColor = 'lightblue';
    // or
    document.body.setAttribute('class','light-blue');
});



//ACAK WARNA
const acak = document.querySelector('#tAcakWarna');
acak.addEventListener ('click',function(){

    // set random value rgb
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    console.log(r);
    console.log(g);
    console.log(b);
    // value rgb harus di set string
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

});



//SLIDER untuk merubah warna
// bungkus dulu dengan section agar bisa dalam satu event listener
const sectiona = document.querySelector('section#a');

// create const untuk masing2 slider
const sMerah = document.querySelector('#slidermerah');
const sHijau = document.querySelector('#sliderhijau');
const sBiru = document.querySelector('#sliderbiru');

// addevent listener
sectiona.addEventListener ('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})



//GESER MOUSE untuk merubah warna
