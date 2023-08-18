let sonuc;
sonuc=10;
sonuc='10';
sonuc=Number('10');
sonuc=parseInt('10.6');
sonuc=isNaN('10a');//sayısal değer değil mi sayısal değer olursa false yazar
let sayi=15.66666;
sonuc=sayi.toPrecision(5);//kaç basmağını alcağını söylüyoruz,ve yuvarlama işlemi yapıyor
sonuc=Math.round(2.4)//Yuvarlama işlemi yapar
sonuc=Math.ceil(2.6)//aşağıya mı yukarıya mı yuvarlanıcak
sonuc=Math.floor(2.2) //aşağıya yuvarlama yapma
sonuc=Math.sqrt(25) //kare kökünü alma
sonuc=Math.abs(25) //mutlak değeri alma
console.log(sonuc);