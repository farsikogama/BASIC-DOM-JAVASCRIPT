
//APPEND CHILD
//create tag element nya dulu
const pBaru = document.createElement('p');
//create isi dari tag element
const textBaru = document.createTextNode('paragraf baru');

//masukkan isi ke tag elemen 
pBaru.appendChild(textBaru);


//tambahkan tag baru di section #a
const section = document.getElementById('a');
section.appendChild(pBaru);



//INSERT BEFORE
const liBaru = document.createElement('li');
const isiLi = document.createTextNode('Li Baru');

liBaru.appendChild(isiLi);

//create const parent child
const ul = document.querySelector('section#b ul');
//create const child yang akan di before kan
const li2 = document.querySelector('section#b ul li:nth-child(2)');

//masukkan dengan format (child baru, child yg akan dibeforekan)
ul.insertBefore(liBaru, li2);



//REMOVE & REPLACE CHILD
const h2 = document.createElement('h2');
const textH2 = document.createTextNode('H2 Baru atau Judul Baru');

h2.appendChild(textH2);

const sectionB = document.querySelector('section#b');
const p4 = document.querySelector('section#b p');

//replace dengan cara format (child baru, child yang akan di replace)
sectionB.replaceChild(h2, p4);
//remove child
// sectionB.removeChild(h2);

pBaru.style.backgroundColor = 'green';
liBaru.style.backgroundColor = 'green';
h2.style.backgroundColor = 'green';