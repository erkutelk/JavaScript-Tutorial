function Dondur(isim,sayi){
    for (let index = 0; sayi >=index ; index++) {
        console.log(`${index}.kez ${isim}`);
    }
}

Dondur('Erkut',5);

function yaziTura(){
    let random=Math.random();
    if(random<0.5)
    {
        console.log('Yazi');
    }
    else{
        console.log('tura');
    }
}

yaziTura()

function Bolum(sayi){
    var liste=[];
    for (let index = 1; index < sayi; index++) {
        if (index%2==0) {
            liste.push(index);
        }
    }
    console.log(liste)

}

Bolum(20)