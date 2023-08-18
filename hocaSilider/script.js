var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '1000',
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings) {
    // setTimeout: Bir kere işler ve durur
    // setInterval: Belirli aralıklarla tekrarlar, clearInterval ile durdurulana kadar devam eder

    var prev; // Önceki slayt indexini saklamak için bir değişken oluşturuluyor
    interval = setInterval(function() {
        
        if (settings.random) {
            // Eğer 'random' ayarı true ise rastgele bir slayt seçilir
            // Önceki slayt ile aynı index gelene kadar yeni bir rastgele seçim yapılır
            do {
                index = Math.floor(Math.random() * slaytCount); // slaytCount'a kadar rastgele bir index hesaplanır
            } while (index == prev); // Eğer seçilen index önceki indexe eşitse tekrar seçim yapılır
            prev = index; // Seçilen index önceki index olarak kaydedilir
        } else {
            // Eğer 'random' ayarı false ise slaytlar sırasıyla gösterilir

            if (slaytCount == index + 1) {
                index = -1; // Eğer son slayta gelindiğinde index sıfırlanır
            }
            showSlide(index); // Belirtilen indexe ait slayt gösterilir
            console.log(index); // Şu anki index konsola yazdırılır
            index++; // Index bir arttırılır
        }
        showSlide(index); // Her durumda index'e göre bir slayt gösterilir

    }, settings.duration); // Ayarlanan süre aralıklarla bu fonksiyon çalıştırılır

}


function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}



