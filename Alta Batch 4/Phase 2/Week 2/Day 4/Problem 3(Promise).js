function beliPromise(uang, obj) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log(`Saya pergi membeli ${obj.item}`)
        let sisa = uang - obj.harga 
        if (sisa >= 0){
            resolve(sisa)
        }
        else {
            reject(
                `Maaf uang tidak mencukupi untuk pembelian selanjutnya karena sisa uang ${uang}`
            )
        }
      }, obj.waktu);
    });
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

beliPromise(5000, sandal)
  .then(kembalianSandal => {
    return beliPromise(kembalianSandal, tas);
  })
  .then(kembalianTas => {
    return beliPromise(kembalianTas, kaos);
  })
  .then(kembalianKaos => {
    return beliPromise(kembalianKaos, jaket);
  })
  .then(kembalianJaket => {
    return beliPromise(kembalianJaket, topi);
  })
  .then(kembalianTopi => {
    console.log(`Kembalian membeli sandal, tas, kaos, jaket dan topi adalah ${kembalianTopi}`);
  })
  .catch(error => {
    console.log(error);
  })

console.log('halo :)')