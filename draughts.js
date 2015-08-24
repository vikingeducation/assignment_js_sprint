var b = jsboard.board({ attach: "game", size: "8x8" });
var x = jsboard.piece({ text: "X", fontSize: "40px", textAlign: "center" });

for(var i=0; i<3; i+=1){
  for(var j=0; j<7; j+=2){
    b.cell([i,j]).place(x.clone());
  }
}

