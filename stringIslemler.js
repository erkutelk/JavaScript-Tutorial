let url='https://www.sadikturan.com';
let veri='Bu string işleminde kaç kelime olduğunu bulma';

// // url dizisinin kça karakterden olduğunu bulma
// url.length;

// //Veri değerinin kaç kelimeden olultuğunu bulma
// console.log(veri.split(' ').length);


// //url değeri http ile mi başlıyor
// var isim=url.startsWith('https')

// if (isim) {
//     console.log('Değeri https verisini içermekete');
// }
// else{
//     console.log('Değeri https değerini içermiyor');
// }

// // veri içerisinde bulma değeri var mı

// var Varmi=veri.indexOf('bulma')//değeri var ise  bu değeri true değerini ver
// if (Varmi) {
//     console.log('Değeri bulunmakata')
    
// }


var kursAdi=veri.toLowerCase();
var uzanti=kursAdi.replaceAll(' ','-');//Bütün değerlerin arasına - koymak için bu methodu kullanmalıyız
console.log(`${url}/${uzanti}`);