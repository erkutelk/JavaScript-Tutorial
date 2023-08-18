var models = [{
        'name': 'isim',
        'image': 'img/1.jpeg',
        'Ozelikler':'Sağlam ve dayanıklı bir tasarım'
    },
    {
        'name': 'İsim2',
        'image': 'img/2.jpeg',
        'Ozelikler':'Bütün ozelikler sağlayan ve sizlerin ihtiyaçlarına uygun bir tasarım'
    },
    {
        'name': 'Ben Ten',
        'image': 'img/3.jpeg',
        'Ozelikler':'İnsanların hayatlarını kolaylaştıran ergonomik tasarım'
    },
    {
        'name': 'Bakugan',
        'image': 'img/4.jpg',
        'Ozelikler':'Tasarımı kuvvetli insanların her türlü özeliğine uygun tasarım'
    }

];
var index=1;
var slaysayısı=models.length;//Kaç resim var onu alır

function Goster(index){
    if (index<0) {
        index=slaysayısı-1
    }
    if(index>=slaysayısı){
        index=0;
    }
        
    
    document.querySelector('#ozelikler').textContent=models[index].Ozelikler
    document.querySelector('.card-title').textContent=models[index].name
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);// içerde bulunan özniteliklerden bir tanesini alır
    document.querySelector('#resimKac').textContent=models[index].image

}


document.querySelector('#sol').addEventListener('click',function(){
    index--;
    Goster(index);
})

document.querySelector('#sag').addEventListener('click',function(){
    index++;
    Goster(index);

})

