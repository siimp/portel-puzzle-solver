class PuzzlePiece {

    private label: number;
    // clockwise : up, right, down, left
    private sides: PieceSide[];

    private rotation: number = 0;

    constructor(label: number, sides: PieceSide[]) {
        this.label = label;
        this.sides = sides;
    }

    /*
    * Rotation counter-clockwise
    */
    public rotate() {
        this.rotation = this.normalize(++this.rotation);
    }

    public getUp(): PieceSide {
        return this.sides[this.rotation];
    }

    public getRight(): PieceSide {
        return this.sides[this.normalize(this.rotation + 1)];
    }

    public getDown(): PieceSide {
        return this.sides[this.normalize(this.rotation + 2)];
    }

    public getLeft(): PieceSide {
        return this.sides[this.normalize(this.rotation + 3)];
    }

    private normalize(value: number): number {
        return value % 4;
    }

    public toString(): string {
        return "label:" + this.label + ";up:" + PieceSide.nameOf(this.getUp());
    }
}

// clockwise : up, right, down, left
const PIECES = [
    new PuzzlePiece(1, [PieceSide.FLAG_END, PieceSide.FISH_END, PieceSide.FLOWER_END, PieceSide.BIRD_END]),
    new PuzzlePiece(2, [PieceSide.BIRD_START, PieceSide.FLOWER_START, PieceSide.FLAG_START, PieceSide.FLOWER_END]),
    new PuzzlePiece(3, [PieceSide.FISH_END, PieceSide.BIRD_START, PieceSide.BIRD_END, PieceSide.FLAG_END]),
    new PuzzlePiece(4, [PieceSide.FLOWER_START, PieceSide.FISH_END, PieceSide.FISH_START, PieceSide.FLAG_END]),
    new PuzzlePiece(5, [PieceSide.BIRD_START, PieceSide.FLAG_START, PieceSide.FISH_START, PieceSide.FLOWER_START]),
    new PuzzlePiece(6, [PieceSide.FISH_END, PieceSide.FLAG_END, PieceSide.BIRD_START, PieceSide.FLOWER_END]),
    new PuzzlePiece(7, [PieceSide.FISH_END, PieceSide.FLAG_START, PieceSide.BIRD_START, PieceSide.FLOWER_START]),
    new PuzzlePiece(8, [PieceSide.FISH_START, PieceSide.FLAG_START, PieceSide.FLOWER_END, PieceSide.BIRD_END]),
    new PuzzlePiece(9, [PieceSide.FLAG_START, PieceSide.BIRD_START, PieceSide.FLOWER_START, PieceSide.FISH_START])
];


