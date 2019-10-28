class MathUtil {
    static factorial(n: number): number {
        if (n == 0 || n == 1) {
            return 1;
        }
        return MathUtil.factorial(n - 1) * n;
    }

    // https://medium.com/@rwillt/two-very-different-algorithms-for-generating-permutations-412e8cc0039c
    static generateAllPermutations(array: number[]): number[][] {
        if (array.length < 2) {
            // Base case, return single-element array wrapped in another array
            return [array];
        } else {
            let perms = [];
            for (let index = 0; index < array.length; index++) {
                // Make a fresh copy of the passed array and remove the current element from it
                let rest = array.slice();
                rest.splice(index, 1);

                // Call our function on that sub-array, storing the result: an array of arrays
                let ps = MathUtil.generateAllPermutations(rest);

                // Add the current element to the beginning of each sub-array and add the new
                // permutation to the output array
                const current = [array[index]]
                for (let p of ps) {
                    perms.push(current.concat(p));
                }
            }
            return perms;
        }
    }
}