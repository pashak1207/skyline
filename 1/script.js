const store = [
    {
        type: 'Apple',
        count: 3,
    },
    {
        type: 'Pear',
        count: 5,
    },
    {
        type: 'Melon',
        count: 3,
    },
    {
        type: 'Pear',
        count: 1,
    },
    {
        type: 'Apple',
        count: 2,
    },
    {
        type: 'Melon',
        count: 2,
    },
    {
        type: 'Apple',
        count: 7,
    },
]

function calculateCountPerType(store) {
    const result = {}
    store.forEach((item)=>{
        if (Object.keys(result).includes(item.type)){
            result[item.type] +=item.count
        }
        else {
            result[item.type] = item.count
        }
    })
    return result
}

const result = calculateCountPerType(store);

console.log('result', result) // { Apple: 12, Pear: 6, Melon: 5 }