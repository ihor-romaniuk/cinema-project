export const getRowsArr = (arr) => {
    return arr.reduce((acc, elem) => {
        if (!acc.length) {
            return [[elem]]
        }

        const hasSameRow = acc.some(rowArr => rowArr.some(obj => obj.row === elem.row));

        if (hasSameRow) {
            return acc.map(rowArr => {
                const hasSameRow = rowArr.some(obj => obj.row === elem.row);

                if (hasSameRow) {
                    return [...rowArr, elem]
                }

                return rowArr;
            });
        } else {
            return [...acc, [elem]]
        }
    }, []);
};
