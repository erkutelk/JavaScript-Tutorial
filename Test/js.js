function Yazi(Title, Title2, description) {
    this.Title = Title;
    this.Title2 = Title2;
    this.description = description;
    this.Yazdir = function () {
        var deger = document.querySelector('.card-title');
        deger.textContent = Title;
    };

    this.title=function(){
        var isim=document.querySelector('.card-header')
        isim.textContent=Title2;
    }

    this.des=function(){
        var isim=document.querySelector('.card-text')
        isim.textContent=description;
    }
}

var isim=[{'İsim':'Erkut','Soyisim':'Elik','Hayat-Hikayesi':'Tornacı'},
{'İsim':'Erkan','Soyisim':'Gitmez','Hayat-Hikayesi':'Taksici'}
]


for (const iterator of isim) {
    var yaziNesnesi = new Yazi(iterator.İsim, iterator.Soyisim, iterator["Hayat-Hikayesi"]);
    yaziNesnesi.Yazdir();
    yaziNesnesi.title();
    yaziNesnesi.des()
}

