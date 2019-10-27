enum PieceSide {
    FLAG_START = 0,
    FLAG_END = 1,
    BIRD_START = 10,
    BIRD_END = 11,
    FISH_START = 100,
    FISH_END = 101,
    FLOWER_START = 1000,
    FLOWER_END = 1001
}

namespace PieceSide {
    export function isMatch(first: PieceSide, second: PieceSide): boolean {
        let value = first - second;
        return value === 1 || value === -1;
    }

    export function nameOf(value: PieceSide): string {
        if (value >= 1000) {
            return "flower";
        } else if (value >= 100) {
            return "fish"
        } else if (value >= 10) {
            return "bird"
        } else {
            return "flag"
        }
    }
}