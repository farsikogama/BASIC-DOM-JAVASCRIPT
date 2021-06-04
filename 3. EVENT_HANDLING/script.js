// EVENT HANDLER
// 1. Inline HTML Script (tulis onclik di tag HTML) tulis di HTML nya onclick = "namaFungsi()"

// 2. Element Method
const p1 = document.querySelector('.p1')
// cuma bisa satu method, kalo pengen banyak method pakai eventlistener
p1.onclick = function () {
  p1.style.backgroundColor = 'green'
}

// EVENT LISTENER p3.addEventListener ('event yang akan ditambahkan, ga usah pakai"on"', 'method/fungsinya')
const p2 = document.querySelector('.p2')

p2.addEventListener('mouseenter', function () {
  p2.style.backgroundColor = 'green'
})

p2.addEventListener('mouseleave', function () {
  p2.style.backgroundColor = 'white'
})

const p3 = document.querySelector('.p3')

p3.addEventListener('click', function () {
  p3.style.backgroundColor = 'red'
  p3.style.color = 'white'
})

const p4 = document.querySelector('section#b p')
console.log(p4.classList)

// p4.addEventListener('mouseenter', function () {
//   alert('ini dikerjakan dengan DOM')
// })

// p4.addEventListener('mouseleave', function () {
//   confirm('ini dikerjakan dengan DOM')
// })

p4.addEventListener('click', function () {
  const ulSectionB = document.querySelector('section#b ul')

  const pBaru = document.createElement('li')
  const textBaru = document.createTextNode('ini paragraf baru')

  pBaru.appendChild(textBaru)
  ulSectionB.appendChild(pBaru)
})
