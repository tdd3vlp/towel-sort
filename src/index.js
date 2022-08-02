// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    matrix.forEach((e, i) => {
        if ((i + 1) % 2 === 0) {
            e.sort((a, b) => b - a);
        }
    });

    return matrix.flat();
};
