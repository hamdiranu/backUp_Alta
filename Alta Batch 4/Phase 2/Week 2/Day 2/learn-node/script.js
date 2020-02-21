const express     = require('express')
const bodyParser  = require('body-parser')
const lodash      = require('lodash')
const chalk       = require('chalk')
const colors      = require("color")
const boxen       = require("boxen")
const mathjs      = require("mathjs")

// Set up the express app
const app = express()

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/batch4/todos', (res) => {                               //   #1
  res.status(200).send({
    success: 'true',
    message: 'todos retrived successfully',
    todos:{
      'lesson': 'javascript',
      'time':'09.00 - 21.00'
    }
  })
});

app.post('/api/batch4/todos', (req,res) => {                          //   #2
  if (!req.body.title){
    res.status(400).send({
      message: 'ada key yang hilang'
    })
  }
    res.status(200).send({
      message: 'sukses'
    })
})

const PORT = 9000
app.listen(PORT, () => {                                              //   #3
  console.log(`server running on port ${PORT}`)
})

// untuk split list menjadi beberapa sub-list                         //   #4
console.log(lodash.chunk(['a','b','c','d','f','j','u','i','o'],2));

// untuk mengeluarkan output yang berupa value dalam list 1 yang tidak ada pada list 2  //   #5
console.log(lodash.difference(['j','d','f','h','k'],['d','f','j','u']));

// untuk menghapus beberapa array pertama pada suatu list             //   #6
console.log(lodash.drop([0,1,2,3,4,5,6,7,8],3));

// untuk mengubah warna string menjadi warna Merah                    //   #7
console.log("Rose are " + chalk.red('Red'));

// untuk mengubah warna string menjadi warna Biru                     //   #8
console.log("Violet are " + chalk.blue('Blue'));

// untuk mengubah warna string menjadi warna Hijau                    //   #9
console.log("Just ignore " + chalk.green('Me'));

// untuk membuat box dengan border style : Bold                       //   #10
console.log(boxen('text',{borderStyle:'bold'}));

// untuk membuat box dengan border style : Double pada border kanan-kiri      //   #11
console.log(boxen('text',{borderStyle:'singleDouble'}));              

// untuk membuat box dengan border style : classic                    //   #12
console.log(boxen('text',{borderStyle:'classic'}));                   

// untuk menghitung nilai tengah dari suatu list bilangan             //   #13
console.log(mathjs.median([2,3,4,5,6,7]));

// untuk menghitung nilai rata2 dari suatu list bilangan              //   #14
console.log(mathjs.mean([2,7,4]));

// untuk menghitung turunan dari suatu persamaan                      //   #15
console.log(mathjs.derivative('2x^2 + 3x + 4', 'x').toString());
