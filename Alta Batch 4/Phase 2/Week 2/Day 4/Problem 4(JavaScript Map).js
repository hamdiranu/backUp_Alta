// =============== MAP, REDUCE, FILTER ================== //


// ======================== MAP ========================= //

// problem # 1 - ubahlah value dalam array dengan format yang baru //
let bdays = ['10-17', '05-19', '20-19'];
let newBdays = bdays.map(elem => elem.replace('-', '/'));

console.log(newBdays);

// problem # 2 - kalikan setiap value dengan kelipatan dua //
let value = [1,2,3,4,5,6]
let newValue = value.map(elem => elem*2);

console.log(newValue);

// problem # 3 - kalikan setiap value dengan kelipatan dua //
let arr=[1.5, 2.56, 5.1, 12.33]
let rounded = arr.map(Math.ceil)

console.log(rounded);

// ======================== MAP END ========================= //

// ======================== REDUCE ========================= //

// problem # 4 - hitung total value seluruh array
let nums = [1,2,3,4]
let sum = nums.reduce(function(fromAwal,toAkhir){
    return fromAwal + toAkhir
})

console.log(sum);

// ====================== REDUCE END ========================= //

// ======================== FILTER ========================= //

// problem # 5 -tampilkan seluruh bilangn positif
var filterValue = [-4, 3, 2,-21, 1]
var pos = filterValue.filter(elem => elem > 0);

console.log(pos);

// problem # 6 -tampilkan object yang setiap propertinya tidak mengandung value 'undefined'
var data =[
    {name:'daniel',age:45},
    {name:'john',age:30},
    {name:'robert',age:null},
    {name:'jen',age:undefined},
    {name:null,age:undefined}
]

var dataMod = data.filter(elem => elem['age']!==undefined);

console.log(dataMod);