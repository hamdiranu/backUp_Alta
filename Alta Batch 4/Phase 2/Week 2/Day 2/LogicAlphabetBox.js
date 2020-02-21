// ============================== RELEASE 00 ================================ //

getRandomHuruf = function (list) {
  return list[Math.floor((Math.random()*list.length))];
} 

function generateAlphabetBoard(){
  const board = []
  for(var j=0; j<9;j++){
    const rowKotak = []
    for(var i=1; i<=9;i++){
      rowKotak.push(getRandomHuruf("QWERTYUIOPASDFGHJKLZXCVBNM"));
    };
    board.push(rowKotak);
  }
  return board;
} 

// ============================== RELEASE 01 ================================ //

let board=generateAlphabetBoard();
console.log(board);

function checkAllConsonantlnBox(box_area){
  let alert = true
  // rumus untuk menentukan kolom & baris yang terkait dengan box_area //
  const kolom = (Math.floor(box_area/3.5)*3)
  const baris = ((((box_area%3)*3)+6)%9)
  for(var j=kolom; j<kolom+3;j++){
    for(var i=baris; i<baris+3;i++){
      if(board[j][i]=='A' || board[j][i]=='I' || board[j][i]=='U' || board[j][i]=='E' || board[j][i]=='O'){
        alert = false;
      }
    }
  }
  return alert;
}

console.log(checkAllConsonantlnBox(1));
console.log(checkAllConsonantlnBox(2));
console.log(checkAllConsonantlnBox(3));
console.log(checkAllConsonantlnBox(4));
console.log(checkAllConsonantlnBox(5));
console.log(checkAllConsonantlnBox(6));
console.log(checkAllConsonantlnBox(7));
console.log(checkAllConsonantlnBox(8));
console.log(checkAllConsonantlnBox(9));

// ============================== RELEASE 02 ================================ //


function generateArrayOfObjectBox(board){
  listObject = []
  for(var objectKe=1; objectKe<10; objectKe++){
    objectDalamList={}
    listValue=[]
    // rumus untuk menentukan kolom & baris yang terkait dengan box_area //
    const kolom = (Math.floor(objectKe/3.5)*3)
    const baris = ((((objectKe%3)*3)+6)%9)
    for(var j=kolom; j<kolom+3;j++){
      for(var i=baris; i<baris+3;i++){
        listValue.push(board[j][i])
        }
      }
    objectDalamList['box_area']= objectKe
    objectDalamList['value']= listValue
    objectDalamList['all_consonant_in_box']= checkAllConsonantlnBox(objectKe)
    listObject.push(objectDalamList)
  }
  return listObject;
}

console.log(generateArrayOfObjectBox(board))
