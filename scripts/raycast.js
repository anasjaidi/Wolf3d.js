const TILE_SIZE = 42
const MAP_NUM_ROWS = 11
const MAP_NUM_COLS = 15
const WINDOW_WIDTH = MAP_NUM_COLS * TILE_SIZE
const WINDOW_HEIGHT = MAP_NUM_ROWS * TILE_SIZE

class Map {
	constructor() {
		this.grid = [
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
			[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];
	}

	render() {
		for (let index = 0; index < MAP_NUM_ROWS; index++) {
			for (let j = 0; j < MAP_NUM_COLS; j++) {
				const element = this.grid[index][j];
				const tileX = j * TILE_SIZE
				const tileY = index * TILE_SIZE
				var color = element == 1 ? '#222' : '#fff'
				fill(color)
				stroke('#222')
				rect(tileX, tileY, TILE_SIZE, TILE_SIZE)	
			}
		}
	}
}

let grid = new Map();

function setup() {
	//? run once
	createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
}

function draw() {
	update();
	grid.render()
}

function update() {}
