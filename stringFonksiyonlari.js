var isim='Erkut'
var soyisim='Elik'
var yas=20
var Doğduğuil='İstanbul/Bağcılar'




let emeklilik=(65-yas>0)?"emekliliğe"+(65-yas)+"yıl kaldı":"Zaten emekli oldunuz";//Burası format methodunun js de nasıl olduğudur
//Soru işareti eğer değer doğru ise solundakini yapar eğer yanlış ise iki noktadan sonra yapar
mesaj=`Benim ismim ${isim} ${soyisim.toUpperCase()}, Yaşım ${yas} doğdum yer ise ${emeklilik}`
console.log(mesaj)