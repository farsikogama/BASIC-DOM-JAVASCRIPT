//1. document.querySelector()
const li2 = document.querySelector('section#b ul li:nth-child(2)') // menghasilkan element

li2.style.backgroundColor = 'red'

// 2. document.qurySelectorAll()
const p = document.querySelectorAll('p') // menghasilkan nodelist / array. jadi semua fungsi array bisa digunakan

p[2].style.backgroundColor = 'lightblue'

//merubah node root dari document.getElementBy jadi ... customNode.getElementBy...
const sectionB = document.getElementById('b')

const li = sectionB.querySelectorAll('li') // ambilnya sectionB, bukan document

li[0].style.backgroundColor = 'green'
