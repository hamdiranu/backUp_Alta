var ubahFillMe = document.getElementById("fill-me");
ubahFillMe.innerHTML='HALO';

var ubahChangeAllOfMe = document.getElementsByClassName("change-all-of-me");
for(var text=0; text<ubahChangeAllOfMe.length; text++){
    ubahChangeAllOfMe[text].innerHTML='HALO JUGA';
}

var ubahFillMe = document.getElementsByTagName("h2");
ubahFillMe[0].innerHTML='Apa Kabar!';
    