var renkDegistir = document.querySelector('#renkDegistir');
var sag = document.querySelector('#sag');
var ortala = document.querySelector('#ortala');
var kutu = document.querySelector('.contain');
var gidis = 0;
var ileri = true;

renkDegistir.addEventListener('click', renkDegistir_);
function renkDegistir_() {
    kutu.classList.toggle('list');
}

sag.addEventListener('click', sag_);
function sag_() {
    if (ileri) {
        gidis += 1;
        kutu.style.color = 'red';

        if (gidis >= 400) {
            ileri = false;

        }
    } else {
        gidis -= 1;

        if (gidis <= 0) {
            ileri = true;
        }
    }

    kutu.style.marginLeft = `${gidis}px`;
    requestAnimationFrame(sag_);
}
