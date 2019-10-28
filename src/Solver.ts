let boardPermutations: number[][] = MathUtil.generateAllPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8]);
let boardPermutationIndex = 0;
let board: Board = initializeBoard();

let rotationsPerBoardLayout = Math.pow(4, board.rows() * board.columns());
let solutionCount = 0;
let maxSolutions = MathUtil.factorial(board.rows() * board.columns()) * rotationsPerBoardLayout;

function hasNextSolution(): boolean {
    return solutionCount < maxSolutions;
}

function nextSolution() {
    doRotations();
    if (isNextLayout()) {
        boardPermutationIndex++;
        board = initializeBoard();
    }
    solutionCount++;
}

function isNextLayout(): boolean {
    return solutionCount >= rotationsPerBoardLayout && solutionCount % rotationsPerBoardLayout === 0;
}

const PRE_CALC_ROTATION_THRESHOLD: number[][] = [];
for (let row = 0; row < board.rows(); row++) {
    PRE_CALC_ROTATION_THRESHOLD[row] = [];
    for (let column = 0; column < board.columns(); column++) {
        let pieceIndex = row * board.columns() + column;
        let val = Math.pow(4, pieceIndex);
        PRE_CALC_ROTATION_THRESHOLD[row][column] = val;
    }
}

function doRotations() {
    for (let row = 0; row < board.rows(); row++) {
        for (let column = 0; column < board.columns(); column++) {
            let threshold = PRE_CALC_ROTATION_THRESHOLD[row][column];
            if ((row === 0 && column === 0) || solutionCount >= threshold && solutionCount % threshold === 0) {
                board.getPieces()[row][column].rotate();
            }
        }
    }
}

function printSolutionsTried() {
    if (solutionCount !== 0 && ((solutionCount) % 1000000) == 0) {
        console.log(((solutionCount / maxSolutions) * 100).toFixed(2) + "%");
    }
}

function initializeBoard(): Board {
    let p: number[] = boardPermutations[boardPermutationIndex];
    return new Board([
        [PIECES[p[0]], PIECES[p[1]], PIECES[p[2]]],
        [PIECES[p[3]], PIECES[p[4]], PIECES[p[5]]],
        [PIECES[p[6]], PIECES[p[7]], PIECES[p[8]]]
    ]);
}

console.log("starting solving");

while (!board.isSolved()) {
    printSolutionsTried();

    if (!hasNextSolution()) {
        throw new Error("tried " + solutionCount + " solutions, non found");
    }
    nextSolution();
}

console.log("finished solving at solution ", solutionCount);
console.log("using permutation ", boardPermutations[boardPermutationIndex]);
console.log("solution is:");
console.log(board.toString())