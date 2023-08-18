let ogrenciler=['erkut','erkan','ada'];
sonuc=ogrenciler.length;
sonuc=ogrenciler.toString();//bütün liste elemanlarını yan yana yazdırmak için kullanılır
sonuc=ogrenciler.join(" ");//liste elemanlarının arasında boşluk eklemek için kullanılır
sonuc=ogrenciler.pop(); // Son elemanı silmek için kullanılır
sonuc=ogrenciler.shift(); // ilk elemanı silmek için kullanılr
sonuc=ogrenciler.push('Sena');// listeye eleman eklemk için kullanılr sonuna eleman ekler
sonuc=ogrenciler.unshift('Sena');// listeye eleman eklemk için kullanılr listenin başına eleman eklemek için kullanılır

let arabalar=['Mazda','Volvo','Bmw','Audi'];
let fiyat=[1111,4124,4122,1231];
sonuc=arabalar.concat(fiyat);//Listeleri birleştirmek için kullanılır
sonuc=arabalar.splice(0,3);

console.log(sonuc);