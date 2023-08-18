const container=document.querySelector('.container')
const sayi=document.querySelector('#count')
const Fiyat=document.querySelector('#amunt')
const select=document.querySelector('#movie')

container.addEventListener('click',function(e){
    if (e.target.classList.contains('seat')&& !e.target.classList.contains('reserved')) {
        //Eğer seat demeseydik bütün tıkladığımız isimleri gösterirdi bu yüzden seat dedik ve class list değeri reserver değeri içermiyorsa seçili değil ise
        e.target.classList.toggle('selected');//Seçiliyese seçme 
        let selectedCount=container.querySelectorAll('.seat.selected').length;
        console.log(selectedCount)
        Fiyat.textContent=`${selectedCount*select.value}TL`;
        sayi.textContent=selectedCount;

        FiyatToplam(Fiyat,sayi)
    }

});
select.addEventListener('change',function(e){
    calculateTotal();
})


function calculateTotal(){
    let selecteSeatCount=container.querySelectorAll('.seat.selected').length;
    let price=select.value
    sayi.innerText=selecteSeatCount;
    
    Fiyat.innerText=`${selecteSeatCount*price}TL`;

}