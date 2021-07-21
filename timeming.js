//setTimeout 

// const tes = setTimeout(function () {
//     console.log('Hello world');

// },5000);

// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click', function () {
//     clearTimeout(tes);
//     console.log('STOP!')

// });



//setTimeinterval

// const tap = setInterval(function(){
//     console.log('HALLO!');
// }, 2000);

// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click', function () {
//     clearInterval(tap);
//     console.log('STOP!')

// });




// Waktu yang sebenarnya -mundur-

const tanggalTujuan = new Date('june 17, 2021 13:51:00').getTime();


const hitungMundur = setInterval(function() {
    const sekarang = new Date ().getTime();
    const selisih = tanggalTujuan - sekarang;
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));  
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const men = Math.floor(selisih % (1000 * 60 * 60 ) / (1000 * 60 ));
    const det = Math.floor(selisih % (1000 * 60 ) / (1000 ));
console.log(det);

const teks = document.getElementById('txt');
teks.innerHTML = 'Waktu anda tinggal ' + hari + ' Hari ' + jam +' Jam ' + men + ' Menit ' + det + ' Detik Lagi ! ';



if( selisih < 2 ){
  clearInterval(hitungMundur);
  teks.innerHTML ='Selesai......';
}
    

}, 1000);







