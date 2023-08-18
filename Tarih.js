let simdi=new Date();//şimdiki tarih bilgisi
sonuc=simdi;
sonuc=simdi.getDate();// gün 
sonuc=simdi.getDay();// hangi günde olduğunu gösterir  
sonuc=simdi.getFullYear();// hangi yılda olduğunu gösterir  
sonuc=simdi.getHours();// saati gösterir
sonuc=simdi.getTime();// saati gösterir

//set method

sonuc=simdi.setFullYear(2030);
sonuc=simdi.setMonth(5);
sonuc=simdi.setDate(15);
console.log(sonuc)