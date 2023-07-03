// variable yang akan sering digunakan
// var a = 10;
// let b = 20;

// const c = 30 - 20; // 1 block
// console.log(a);

// var int = 5;
// var float = 5.5;

// var string1 = "Selamat ";
// var string2 = "Pagi";

// console.log(string1 + string2);

// penjumlahan dalam javascript
// var a = 10
// var b = 20

// var hasil = a + b

// console.log(hasil)

// // pengurangan
// var c = 20;
// var pengurangan = hasil - c;
// console.log(pengurangan);

// // perkalian
// let d = 40;
// var perkalian = pengurangan * 40;
// console.log(perkalian);

// // pembagian
// var f = 50;
// var pembagian = perkalian / 50;
// console.log(pembagian);

// // modulus (sisa pembagian)
// var modulus1 = 13;
// var modulus2 = 10;
// var mod = modulus1 % modulus2;
// console.log(mod);


// variable array
// var array = ["Danang","1810","Teknik Informatika"]

// console.log(array[2]);

// // variable object
// var object = { nama: "Danang", nim: "1810", jurusan: "teknik informatika" }

// console.log(object.nama);

// control flow dalam bahasa pemograman adalah perintah kondisional atau perintah berulang

// var angka = prompt('Masukkin Angka : ');
// kondisi or jika salah satu true atau sudah memenuhi maka hasilnya true
// if (angka == "10" || angka == "20") {
//     alert('User Memasukkan angka ' + angka)
// } else {
//     alert('User bukan memasukkan angka 10 atau 20') 
// }

// kondisi and jika salah satu true maka dia masuknya false, jika kedua true maka masuknya true
// if (angka == "10" && angka == "30") {
//     alert('User Memasukkan angka ' + angka)
// } else {
//     alert('angka yang dimasukkan salah')
// }

// if (angka % 2 === 0) {
//     alert(angka + " adalah bilangan genap")
// } else {
//     alert(angka + " adalah bilangan ganjil")
// }

// if (angka == 10) {
//     alert('bilangan ' + angka);
// } else if (angka == 20){
//     alert('bilangan ' + angka);
// } else if (angka == 30){
//     alert('bilangan ' + angka);
// } else {
//     alert('bilangan tidak ada');
// }

// if bersarang atau if bercabang
// if (angka == 12) {

//     if (angka == 11) {

//         if (angka == 10) {

//             alert('berhasil sampai tahap 3')
//         } else {
//              alert('angka lebih kecil dari atau sama dengan 12')
//         }

//     } else {
//         alert('angka lebih kecil dari atau sama dengan 11')
//     }

// } else {
//     alert('angka lebih kecil dari atau sama dengan 10')
// }

// while selama kondisinya masih true maka dijalankan, while itu bisa di bilang pengulangan dalam program
// var test = true;

// while(test){
//     console.log('hello world');
//     test = confirm('test again?')
// }


// var sistem = 10;
// var sistem_run = 6;
// var no_sistem = 1;

// while menggunakan if else 

// while (no_sistem <= sistem_run) {
//     console.log('sistem no. ' + no_sistem + ' Running');

//     if (no_sistem >= 5) {
//         console.log('sistem no. ' + no_sistem + ' Maintenance');
//     } else {
//         console.log('sistem no. ' + no_sistem + ' Running');
//     }
//     no_sistem++;
// }

// for loop
// for (no_sistem = 1; no_sistem <= sistem; no_sistem++) {
    
//     console.log('Sistem no. ' + no_sistem + ' Maintenance');
    
// }

// for (no_sistem = 1; no_sistem <= sistem; no_sistem++) {

//     if ( no_sistem >= 8) {
//         console.log('Sistem no. ' + no_sistem + ' Maintenance');
//     } else {
//         console.log('sistem no. ' + no_sistem + ' Running');
//     }

// }


// switch case
// var key = prompt('Silahkan masukan angka : ');

// switch (key) {
//     case "Buah":
//         alert('Anda memasukkan angka 1');
//         break;
//     case "Minuman":
//         alert('Anda memasukkan angka 2');
//         break;
//     case "Makanan":
//         alert('Anda memasukkan angka 3');
//         break;
//     case "Obat":
//         alert('Anda memasukkan angka 4');
//         break; 
//     default:
//         alert('Anda memasukkan angka yang tidak tersedia');
//         break;
// }

// function adalah blok kode terorganisir dan dapat digunakan kembali atau digunakan untuk melakukan sebuah tindakan/action

// function test(...b){
//     var total;
//     console.log(b);
//     // return total;
// }

// console.log(test( 10 , 20 , 30, 50 ));


// function expression

// 1



// array kosong di isi dengan menggunakan indexing
// var array = [];
// array[0] = "index1";
// array[1] = "index2";
// array[2] = "index3";
// array[3] = "index4";
// array[4] = "index5";
// console.log(array);


var array = ["Danang","1810","Teknik Informatika"]

// menampilkan isi data array menggunakan for loop

for (let i = 0; i < 3; i++) {
   
    console.log('index ke - ' + (i) + ' : ' + array[i]);
    
}

// menampilkan isi data array menggunakan foreach
array.forEach
(
    function(e, i) 
    {
        console.log(e);
    }
)








