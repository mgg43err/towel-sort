module.exports = function towelSort(matrix) {
        if (arguments.length > 0) {
            let i = 1;
            while (i < matrix.length) {
                matrix[i] = matrix[i].reverse();
                i = i + 2;
            }
            /*  console.log(matrix.flat()); */
            return matrix.flat();
        } else {
            console.log([]);
            return [];
        }
    }
    /* towelSort([
        [1, 2],
        [3, 4],
    ]); */