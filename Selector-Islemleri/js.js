var liste = [{
    'id': '1',
    'İsim': 'Erkut',
    'aciklama': 'Araba kalem',
}, {
    'id': '2',
    'İsim': 'Erkan',
    'aciklama': 'masa'
}, {
    'id': '3',

    'İsim': 'Efkan',
    'aciklama': 'naber'
}]


var aciklama = document.querySelector('#aciklama')
var input = document.querySelector('#input')
var liste1 = document.querySelector('#liste1')


Tablo()//Bu bütün tabloyu göstermeye yarıyor tabloya veri ekledik ama tablonun yeniden çağırılması gerekli.

document.querySelector('#button').addEventListener('click', button)
function button() {
    Tablo()

    var deger = liste.length;
    liste.push({
        'id': deger + 1,
        'İsim': input.value,
        'aciklama': aciklama.value
    })
    console.log(liste1)
}


function Tablo() {
    liste1.innerHTML = ""; //JavaScript ile bu içeriği değiştirmek için innerHTML kullanabilirsiniz:
    for (let liste_ of liste) {
        let li = `<li><h1>${liste_.id} ${liste_.İsim}</h1><p>${liste_.aciklama}
        <input type="button" id='sils' onclick="sil(${liste_.id})" value='Sil'>

</p></li>`
        liste1.insertAdjacentHTML('beforeend', li)

    }
}
// İlk radyo düğümünü seç ve tıklama olayı dinleyici ekle
var radio1 = document.querySelector('input[type="radio"][value="1"]');
radio1.addEventListener('click', function() {
    Tablo1('1 eklendi');
});

// İkinci radyo düğümünü seç ve tıklama olayı dinleyici ekle
var radio2 = document.querySelector('input[type="radio"][value="2"]');
radio2.addEventListener('click', function() {
    Tablo1('2 eklendi');
});

// Tıklama olayı işleyicisi
function Tablo1(tür) {
    console.log('Değer eklendi', tür);
    // Diğer işlemleri burada yapabilirsiniz
}





function sil(id){
    let deletedId;
            
            for(let index in liste) {
                if(liste[index].id == id) {
                    deletedId = index;
                }
            }

            liste.splice(deletedId, 1);
            Tablo()
}




