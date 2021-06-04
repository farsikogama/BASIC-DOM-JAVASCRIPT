// latihan :
//  - Tambahin Paragraf baru di section A pakai append child
//  - Tambahin Paragraf baru di section B pakai insert before
//  - Ganti isi paragraf di section B dengan H baru pakai repace child

// caranya :
// 1) harus tau parentnya siapa.
// 2) Elemen yang mau kita rubah.
// 3) document.createElement.
// 4) document.createTextNode

const pBaru = document.createElement('p')
const textPBaru = document.createTextNode('ini paragraf baru')

const parentSectionA = document.getElementById('a')

pBaru.appendChild(textPBaru)
parentSectionA.appendChild(pBaru)

const liBaru = document.createElement('li')
const textLiBaru = document.createTextNode('ini paragraf baru')
const parentUl = document.querySelector('section#b ul')
const liAfter = document.querySelector('section#b ul li:nth-child(1)')

liBaru.appendChild(textLiBaru)
parentUl.insertBefore(liBaru, liAfter)
// parentUl.replaceChild(liBaru, liAfter)
console.log(liAfter)

//1. APPEND CHILD
//create tag element nya dulu
// const pBaru = document.createElement('p')
//create isi dari tag element
// const textBaru = document.createTextNode('paragraf baru')

//masukkan isi ke tag elemen
// pBaru.appendChild(textBaru)

//tambahkan tag baru di section #a
// const section = document.getElementById('a')
// section.appendChild(pBaru)

//2. INSERT BEFORE
// const liBaru = document.createElement('li')
// const isiLi = document.createTextNode('Li Baru')

// liBaru.appendChild(isiLi)

//create const parent child
// const ul = document.querySelector('section#b ul')
//create const child yang akan di before kan
// const li2 = document.querySelector('section#b ul li:nth-child(2)')

//masukkan dengan format (child baru, child yg akan dibeforekan)
// ul.insertBefore(liBaru, li2)

//3. REMOVE & REPLACE CHILD
// const h2 = document.createElement('h2')
// const textH2 = document.createTextNode('H2 Baru atau Judul Baru')

// h2.appendChild(textH2)

// const sectionB = document.querySelector('section#b')
// const p4 = document.querySelector('section#b p')

//replace dengan cara format (child baru, child yang akan di replace)
// sectionB.replaceChild(h2, p4)
//remove child
// sectionB.removeChild(h2);

pBaru.style.backgroundColor = 'green'
liBaru.style.backgroundColor = 'green'
// h2.style.backgroundColor = 'green'
