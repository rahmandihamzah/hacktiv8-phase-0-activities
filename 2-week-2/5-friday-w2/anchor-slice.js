function slice(data, start, end){
    let count = 0;
    let newArray = [];
    if (!start && !end) {
        return data;
    } else if (start > data.length || end < start || start < 0 || start === end) {
        return newArray;
    } else {
        if (!end) {
            for (let i = start; i < data.length; i++) {
                newArray[count] = data[i];
                count ++;
            }
            return newArray;
        } else {
            for (let i = start; i < end; i++) {
                newArray[count] = data[i];
                count ++;
            }
            return newArray;
        }
    }
}

console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]