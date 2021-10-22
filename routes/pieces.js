const express = require("express");
const router = express.Router();
const chessPieces = [{
	"name": "pawn",
	"startnum": "8"
},
{
	"name": "rook",
	"startnum": "2"
},
{
	"name": "knight",
	"startnum": "2"
}];

router.get("/", (req, res) => {
	res.json(chessPieces);
});

router.get("/:piece_name", (req, res) => {
	const piece_name = req.params.piece_name;
	var piece = chessPieces.find(obj => obj.name === piece_name)
	if(piece = undefined){
		return res.json({ message: "Piece not found"})
	}else{
		res.json(piece);	
	};
	
});
module.exports = router;