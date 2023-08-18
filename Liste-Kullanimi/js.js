// var İsimler={'isim':'Erkut',
// 'soyisim':'Elik',
// 'numara':155}


var liste2=['Erkut','Elik','Masa','sandalye'];

// liste2.push('Naber');
// liste2.splice(1,3)
//Birinci eleman dan başla ve ekle
//Kac elemanının silinmesini sitiyorsak bunu yapmamız gerekli
// console.log(liste2);


var liste2 = ['Erkut', 'Elik', 'Masa', 'sandalye'];

document.querySelector('#but').addEventListener('click', EklemeBut);

function EklemeBut() {
    var input = document.querySelector('#tb');
    liste2.push(input.value);
    console.log(liste2);
    var liste=document.querySelector('#liste')

    var ekle=`<li>${input.value}</li>`
    liste.insertAdjacentHTML('beforeend',ekle);
}
