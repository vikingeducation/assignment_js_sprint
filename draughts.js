var b = jsboard.board({ attach: "game", size: "8x8", style: "checkerboard" });
var x = jsboard.piece({ text: "X", fontSize: "40px", textAlign: "center" });
var bp = jsboard.piece({ text: "●", fontSize: "40px", textAlign: "center"});
var wp = jsboard.piece({ text: "○", fontSize: "40px", textAlign: "center"});
var current_piece = null;

/// Black loops

var initialize = function(){
	for(var j=0; j<7; j+=2){
		b.cell([5, j]).place(bp.clone());
	}

	for(var j=1; j<=7; j+=2){
		b.cell([6, j]).place(bp.clone());
	}

	for(var j=0; j<7; j+=2){
		b.cell([7, j]).place(bp.clone());
	}

	for(var j=1; j<=7; j+=2){
		b.cell([0, j]).place(wp.clone());
	}

	for(var j=0; j<7; j+=2){
		b.cell([1, j]).place(wp.clone());
	}

	for(var j=1; j<=7; j+=2){
		b.cell([2, j]).place(wp.clone());
	}

	initializePieceEvents();
}

var initializePieceEvents = function(){
	for (var i = 0; i <= 7; i++){
		for (var j = 0; j <= 7; j++){
			if ((i + j) % 2 == 1){
				if (b.cell([i, j]).get()){
					b.cell([i, j]).on("click", selectPiece);
				}
			}
		}
	}
}

var selectPiece = function(){
	b.cell("each").removeOn("click", selectPiece);
	b.cell(this).style({ backgroundColor: "red" });
	b.cell(this).on("click", deselectPiece);
	current_piece = this;

	//Make a piece to move to nearby vacant dark spots
	var coords = b.cell(this).where() //[row, column] current coordinates
	var moves = [[coords[0]-1, coords[1]-1],[coords[0]+1, coords[1]+1],[coords[0]-1, coords[1]+1],[coords[0]+1, coords[1]-1]]
	console.log(moves)
	for (i = 0; i < moves.length; i++){
		console.log(i)
		if (b.cell(moves[i]).get()== null){
			b.cell(moves[i]).style({ backgroundColor: "yellow" })
			b.cell(moves[i]).on("click", movePiece);
		};
	}
	//console.log(moves)
}

var movePiece = function(){
	// Remove the selected piece from current position
	var color = b.cell(current_piece).get();
	console.log(color);
	b.cell(current_piece).rid();
	b.cell(this).place(placePiece(color));
	b.cell("each").removeOn("click", deselectPiece);
	b.cell("each").removeOn("click", movePiece);
	for (var i = 0; i <= 7; i++){
		for (var j = 0; j <= 7; j++){
			if ((i + j) % 2 == 1){
				if (b.cell([i, j]).get()){
					b.cell([i, j]).on("click", selectPiece);
				}
				b.cell([i, j]).style({ backgroundColor: "gray" });
			}
		}
	}
	current_piece = null;
}

var placePiece = function(color){
	if (color === "●") {return bp.clone()}
	else {return wp.clone()}
}

var deselectPiece = function(){
	for (var i = 0; i <= 7; i++){
		for (var j = 0; j <= 7; j++){
			if ((i + j) % 2 == 1){
				if (b.cell([i, j]).get()){
					b.cell([i, j]).on("click", selectPiece);
				}
				b.cell([i, j]).style({ backgroundColor: "gray" });
			}
		}
	}
	current_piece = null;
	b.cell(this).removeOn("click", deselectPiece);
}


initialize();
