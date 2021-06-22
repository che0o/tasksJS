const mixedArray = [3,13,74,14,66,15,22,4];

let isEven = num => {
    return num % 2 === 0;
};

let filterArray = (arrFilter, filterFn) => {
        let filteredArray = [];

        arrFilter.forEach(num => {
            if (filterFn(num)) {
                filteredArray.push(num);
            }
        });


        return filteredArray;
}


console.log(filterArray(mixedArray, isEven));
