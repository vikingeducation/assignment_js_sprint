var b = jsboard.board({ attach: "game", size: "8x8", style: "checkerboard" });
var x = jsboard.piece({ text: "X", fontSize: "40px", textAlign: "center" });
var bp = jsboard.piece({ text: "●", fontSize: "40px", textAlign: "center"});
var wp = jsboard.piece({ text: "○", fontSize: "40px", textAlign: "center"});
var current_piece = null;
var move_turn = 0;
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

	resetSquares();
}

var resetSquares = function(){
	for (var i = 0; i <= 7; i++){
		for (var j = 0; j <= 7; j++){
			if ((i + j) % 2 == 1){
				if (b.cell([i, j]).get() === current_turn()){
					b.cell([i, j]).on("click", selectPiece);
				}
				b.cell([i, j]).style({ backgroundColor: "gray" });
			}
		}
	}
}


var current_turn = function(){
	console.log(move_turn);
	if (move_turn % 2 == 0) {return "●"} else {return "○"}
}

var selectPiece = function(){
	b.cell("each").removeOn("click", selectPiece);
	b.cell(this).style({ backgroundColor: "red" });
	b.cell(this).on("click", deselectPiece);
	current_piece = this;

	//Make a piece to move to nearby vacant dark spots
	var coords = b.cell(this).where() //[row, column] current coordinates
	//build first cicle of moves with vectors
	//build second cicle of moves with vectors

	var moves = []
	var potential_moves = get_moves();
	for(var i=0; i < potential_moves.length; i++) {
		moves.push([coords[0]+potential_moves[i][0],coords[1]+potential_moves[i][1]])
	}

	console.log(moves)
	for (i = 0; i < moves.length; i++){
		if (b.cell(moves[i]).get() == null){
			b.cell(moves[i]).style({ backgroundColor: "yellow" });
			b.cell(moves[i]).on("click", movePiece);
		} else if (b.cell(moves[i]).get() !== current_turn()){
			var jump_square = b.cell([coords[0] + (potential_moves[i][0] * 2), coords[1] + (potential_moves[i][1] * 2)])
			// var offset = [coords[0] - moves[i][0], moves[i][1] + coords[1] ];
			if (jump_square.get() == null) {
				jump_square.style({ backgroundColor: "yellow"});
				jump_square.on("click", movePiece);
			}
		};
	}
}

var get_moves = function(coords){
	var vectors = [];
	if (b.cell(current_piece).get() === "○"){vectors = [[1, 1], [1, -1]]}
		else {vectors = [[-1, -1], [-1, 1]]}
	return vectors
}
var movePiece = function(){
	// Remove the selected piece from current position
	var color = b.cell(current_piece).get();
	console.log(color);
	b.cell(current_piece).rid();
	b.cell(this).place(placePiece(color));
	b.cell("each").removeOn("click", deselectPiece);
	b.cell("each").removeOn("click", movePiece);
	current_piece = null;
	move_turn += 1;
	resetSquares();
}

var placePiece = function(color){
	if (color === "●") {return bp.clone()}
	else {return wp.clone()}
}

var deselectPiece = function(){
	resetSquares();
	current_piece = null;
	b.cell(this).removeOn("click", deselectPiece);
}


initialize();
