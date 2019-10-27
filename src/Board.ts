class Board {

    private pieces: PuzzlePiece[][];

    constructor(pieces: PuzzlePiece[][]) {
        this.pieces = pieces;
    }

    public getPieces(): PuzzlePiece[][] {
        return this.pieces;
    }

    public isSolved(): boolean {
        let isSolved: boolean = true;
        for (let row = 0; row < this.rows() && isSolved; row++) {
            for (let column = 0; column < this.columns() && isSolved; column++) {
                if (!this.matchesOtherPices(row, column)) {
                    isSolved = false;
                }
            }
        }
        return isSolved;
    }

    public rows(): number {
        return this.pieces.length;
    }

    public columns(): number {
        return this.pieces[0].length;
    }

    private matchesOtherPices(row: number, column: number): boolean {

        let rightSideMatches = null;
        if (column < this.columns() - 1) {
            rightSideMatches = this.getRightSideMatches(row, column);
        }

        let downSideMatches = null;
        if (row < this.rows() - 1) {
            downSideMatches = this.getDownSideMatches(row, column);
        }

        return (rightSideMatches === null || rightSideMatches === true) &&
            (downSideMatches === null || downSideMatches === true);
    }

    private getRightSideMatches(row: number, column: number): boolean {
        let currentPieceRightSide: PieceSide = this.pieces[row][column].getRight();
        let rightPieceLeftSide: PieceSide = this.pieces[row][column + 1].getLeft();
        return PieceSide.isMatch(currentPieceRightSide, rightPieceLeftSide);
    }

    private getDownSideMatches(row: number, column: number): any {
        let currentPieceDownSide: PieceSide = this.pieces[row][column].getDown();
        let lowerPieceUpSide: PieceSide = this.pieces[row + 1][column].getUp();
        return PieceSide.isMatch(currentPieceDownSide, lowerPieceUpSide);
    }

    public toString(): string {
        let result = "";
        for (let row = 0; row < this.rows(); row++) {
            for (let column = 0; column < this.columns(); column++) {
                result += this.pieces[row][column].toString() + "\t";
            }
            result += "\n"
        }
        return result;
    }

} 
