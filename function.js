function isimler(isim){
    return isim.length;
}

function yasHesapla(yas){
    return new Date().getFullYear() - yas;
}

function birlestir(yas, isim){
    var kalanYas = yasHesapla(yas);
    console.log(kalanYas, 'Bu kadar yaşın kaldı');
}

var ad = 'erkut';
var yasim = 15;

isimler(ad);
yasHesapla(yasim);
birlestir(yasim, ad);
