export function copyArray(array) {
    let dataCopy = []
    let index = 0
    for (const el of array) {
        let newEl = {
            id: index,
            value: el
        }
        dataCopy.push(newEl)
        index += 1;
    }
    return dataCopy;
}


export  function normalize(data, n){
    let dataCopy = copyArray(data);
    dataCopy = dataCopy.sort((a,b) => (a.value - b.value))
    dataCopy.splice(0, n)
    let minusN = n * (-1)
    dataCopy.splice(minusN, n)
    let dataResult = dataCopy.sort((a,b) => (a.id - b.id))
    return dataResult;
}