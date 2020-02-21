function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    kembalian=uang-obj.harga
    if (kembalian >=0){
        cb(kembalian)
    }
    else {
        console.log(`Maaf, uang tidak cukup membeli ${obj.item} karena sisa uang ${uang}`)
    }
    
  }, obj.waktu);
}


let sandal = {
  item: 'sandal',
  harga: 2000,
  waktu: 2000,
};

let tas = {
  item: 'tas',
  harga: 2000,
  waktu: 2000,
};

let kaos = {
  item: 'kaos',
  harga: 2000,
  waktu: 2000,
};

let jaket = {
  item: 'jaket',
  harga: 2000,
  waktu: 2000,
};

let topi = {
  item: 'topi',
  harga: 2000,
  waktu: 2000,
};

beli(5000, sandal, function(kembalianSandal) {
  beli(kembalianSandal, tas, function(kembalianTas) {
    beli(kembalianTas, kaos, function(kembalianKaos) {
      beli(kembalianKaos, jaket, function(kembalianJaket) {
        beli(kembalianJaket, topi, function(kembalianTopi) {
          console.log(`Kembalian membeli sandal, tas, kaos, jaket dan topi adalah ${kembalianTopi}`)
        });
      });
    });    
  });
});
