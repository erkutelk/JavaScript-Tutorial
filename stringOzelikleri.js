let kursAdi='Komple uygulamalı python kursu';
let sonuc;
sonuc=kursAdi.toLowerCase();//Bütün harfleri küçük harf yapar
sonuc=kursAdi.toUpperCase();//bütün harfleri büyük harfleri büyük harf yapar
sonuc=kursAdi.length;//Kelimlerin ozelliklerini gösteriyor
sonuc=kursAdi[1]//O indecten bulunan değeri getirir.
sonuc=kursAdi.slice(0,11)// Sıfırıncı indexten 6. indexe kadar olan harfleri getir.
sonuc=kursAdi.slice(11)// 11 den başla sona kadar git.
sonuc=kursAdi.slice(-5)// -5 değerine kadar al
sonuc=kursAdi.replace('Komple','Tamamı');//Değiştirme 
sonuc=kursAdi.trim()//Boşlukları silmek için kullanılır.
sonuc=kursAdi.trimEnd();//sondaki boşlukları silmek için kullanılır.
sonuc=kursAdi.trimStart();//Başktaki boşlukları silmek için kullanılır.
sonuc=kursAdi.indexOf('python');//Python değeri kaçıncı indexte olduğunu bulmak için kullanılır
sonuc=kursAdi.split(" ");// Dizi şeklinde bölmek için kullanılır
sonuc=kursAdi.split(" ")[0];//Gelen metni böler. Ve böldüğü değerin içindeki 0. index 'i alır
// javascript string değer
console.log(sonuc)
for (let i = 0; i < sonuc; i++) {
    console.log(kursAdi[i]);
    
}