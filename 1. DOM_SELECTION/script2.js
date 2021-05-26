//1. document.querySelector()
const li2 = document.querySelector('section#b ul li:nth-child(2)') // menghasilkan element

li2.style.backgroundColor = 'red'

// 2. document.qurySelectorAll()
const p = document.querySelectorAll('p') // menghasilkan nodelist / array. jadi semua fungsi array bisa digunakan

p[2].style.backgroundColor = 'lightblue'

//merubah node root
const sectionb = document.getElementById('b')

const li = sectionb.querySelectorAll('li')

li[0].style.backgroundColor = 'green'
