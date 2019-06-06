class Cell {
	id;
	x_top_left;
	y_top_left;
	width;
	height;
	x_center;
	y_center;
	neighbours = new Map()

	constructor(json_cell) {
		this.id = json_cell.id;
		this.x_top_left = json_cell.x;
		this.y_top_left = json_cell.y;
		this.width = json_cell.width;
		this.height = json_cell.height;
		this.x_center = json_cell.x + json_cell.width/2;
		this.y_center = json_cell.y + json_cell.height/2;
	}

	get_distance(another_cell) {
		var distance = 0;
		if (this.neighbours.has(another_cell.id)) {
			distance = this.neighbours.get(another_cell.id);
		}
		return distance;
	}
}

class Board {

	name;
	cells = new Map();

	constructor (cells) {
		var cells_data = JSON.parse(cells);
		this.name = cells_data.name;
		console.log(this.name)
		for (var i = 0; i < cells_data.cells.length; i++) {
		    var cell = new Cell(cells_data.cells[i]);
		    this.cells.set(cell.id, cell)
		    console.log(cell.id);
		}
		console.log(this.cells)
	}

	get_cell(id) {
		console.log(this.cells.get(id))
	}
}