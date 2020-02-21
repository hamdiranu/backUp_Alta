// =========================== Keturunan Pertama ================================ //
var ubahKeturunanPertama = document.getElementById("eldest-parent");
var childturunanPertama = ubahKeturunanPertama.children[0];
childturunanPertama.innerHTML='Diakses Melalui Eldest Parent';

// =========================== Generasi Termuda ================================ //
var generasiTermuda = ubahKeturunanPertama.children[1].children[0];
var generasiTermudaTua = generasiTermuda.children[0];
generasiTermudaTua.innerHTML='Diakses Melalui a Child';
var generasiTermudaMuda = generasiTermuda.children[2];
generasiTermudaMuda.innerHTML='Diakses Melalui a Child';

// =========================== Generasi Cukup Tua ================================ //
var childturunanPertama = ubahKeturunanPertama.children[2];
childturunanPertama.innerHTML='Diakses Melalui a Child';