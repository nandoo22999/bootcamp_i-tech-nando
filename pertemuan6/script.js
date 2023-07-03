//definisi dari DOM adalah antarmuka pemograman untuk HTML yang merepresentasikan halaman web, sehingga program dapat mengubah dan memanupulasi strukturnya

// DOM SELECTION

// getElementById() -> untuk mengembalikan element html untuk di manipulasi menggunakan JS DOM

// const judul = document.getElementById('judul')
// judul.style.color = 'green'
// judul.style.backgroundColor = 'red'
// judul.innerHTML = 'Testing Inner HTML'

// getElementsByTagName() --> mengembalikan HTML collection
// const p = document.getElementsByTagName('p')
// // p[2].style.backgroundColor = 'green'
// console.log(p);

// // mengubah getelementsbytagname menggunakan forloop
// for (let i = 0; i < p.length; i++) {
//     if (i == 3) {
//         p[i].style.backgroundColor = 'red'
//         p[i].innerHTML = 'Paragraf 4 BARU'
//     } else {
//         p[i].style.backgroundColor = 'green'
//     }
  
// }


// getElementByClassName() -> mengembalikan HTML collection

// const p1 = document.getElementsByClassName('p1')
// p1[0].innerHTML = 'Paragraf Satu yang baru'
// console.log(p1);


// querySelector() -> menghasilkan sebuah element seperti belajar css kemarin

// const p4 = document.querySelector('#b p')
// console.log(p4);
// p4.style.color = 'green'
// p4.style.fontSize = '30px'

// ada saat kita tidak boleh mengubah html langsung ke file htmlnya tapi kita ingin menargetkan dan memanipulasi dengan menggunakan query selector

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// console.log(li2);
// li2.style.backgroundColor = 'orange'

// const p = document.querySelector('p')[2]
// console.log(p);
// p.innerHTML = 'Di ubah menggunakan javascript'


// querySelectorAll() menghasilkan nodelist bukan html collection
// const p = document.querySelectorAll('p')
// p[1].style.backgroundColor = 'salmon'


// for (let i = 0; i < p.length; i++) {
   
//     p[i].style.backgroundColor = 'red'
    
// }


// latihan
// const sectionB = document.getElementById('b')
// // jika ingin mencari paragraf 4 dari section b
// const p4 = sectionB.querySelector('p')
// p4.style.backgroundColor = 'salmon'

// // ketik ingin mengambil atau memilih suatu element bisa dipakai query selector atau get element by id

// const sectionA = document.getElementById('a')
// const p2 = sectionA.querySelectorAll('p')[1]

// p2.innerHTML = 'Textt Html baru paragraf 2'

// const sectionB = document.querySelector('section#b')
// const p4 = sectionB.getElementsByTagName('p')[0]
// console.log(p4);
// p4.style.backgroundColor = 'orange'

// Manipulasi ELEMENT
// element.innerHTML untuk mengubah isi dari element yang pernah kita isi atau mengubah tag elementnya
// const judul = document.getElementById('judul')
// judul.innerHTML = '<img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png">'

// element.style untuk mengubah style dari element yang kita seleksi


// element.setAttribute() untuk memanipulasi atrribute yang melekat pada element html

// const judul = document.getElementsByTagName('h1')[0];

// // console.log(judul);
// // ini untuk setatribute membuat class baru didalam element
// judul.setAttribute('class', 'judul judul2');

// // untuk delete atribute didalam element
// judul.removeAttribute('class')

// ini untuk setatribute membuat id baru didalam element
// judul.setAttribute('id', 'juduls')

// creating element baru

// const judul = document.createElement('p')
// judul.innerHTML = 'Ini paragrap baru'
// document.body.appendChild(judul)

// const new_p = document.createElement('p')
// // 2 node new_p masih terpisah
// const new_text = document.createTextNode('New Paragraph')

// // appendChild ini untuk menggabungkan text dan element paragraph
// new_p.appendChild(new_text)

// // simpan ke dalam akhir section A
// const sectionA = document.getElementById('a')
// sectionA.appendChild(new_p)
// // membuat list baru memakai js dom
// const new_li = document.createElement('li')
// const newLiText = document.createTextNode('Item 4')
// new_li.appendChild(newLiText)

// const ul = document.querySelector('section#b ul')

// const li2 = ul.querySelector('li:nth-child(4)')

// ul.insertBefore(new_li, li2)
// // deleting element 
// const p1 = document.getElementsByClassName('p1')[0]
// sectionA.removeChild(p1)

// event js dom

// onclick event
const p3 = document.querySelector('.p3')
function change_color() {
    p3.style.backgroundColor = 'salmon'
}

const p2 = document.querySelector('.p2')
function show_alert() {
    alert('Berhasil klik paragrap 2');
}

const p1 = document.querySelector('.p1')
p1.onclick = show_alert;

const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul')
    const new_li = document.createElement('li')
    const text_li = document.createTextNode('Ini Item Baru')

    new_li.appendChild(text_li)
    ul.appendChild(new_li)
})

// event mouseenter
p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'red'
    p3.innerHTML = 'Berubah'
    // alert('hai')
})


// event mouseleave 
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white'
    p3.innerHTML = 'paragraf 3'
})