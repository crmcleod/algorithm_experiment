let times = [[], []]
const randomArray = (length, limit) => {
    const arr = Array.from({ length: length }, () => Math.floor(Math.random() * limit));
    return arr;
}

const randomArr = randomArray(100000, 100000);

const sortingAlg = () => {
    const randArr = randomArray(100000, 100000)
    const startTime = new Date().getTime()
    let sorted = []

    randArr.forEach(x => {
        sorted?.[x] ?
            sorted[x]++ :
            sorted[x] = 1
    })

    let final = []
    sorted.forEach((x, i) => {
        final.push(...fillArr(i, x))
    })
    const endTime = new Date().getTime()
    times[0].push(endTime - startTime)
    return final;
}

const fillArr = (num, replicates) => {
    return Array(replicates).fill(num)
}
const runAlg = () =>{
    for (let i = 0; i <= 100; i++) {
        sortingAlg(randomArr)
    }
}

const runJSlib = () => {

    for (let i = 0; i <= 100; i++) {
        let random = randomArray(100000, 100000)
        const startTime = new Date().getTime()
        const sorted = random.sort((a, b) => a - b)
        const endTime = new Date().getTime()
        times[1].push(endTime - startTime)
    }
}
runAlg()
runJSlib()

const finalTotal = times.map((x) => {
    let total = 0
    x.forEach(y => total += y)
    return total
})

console.log('Over 100 iterations: \n My algorithm ' + finalTotal[0] + 'ms ' + '\n js sort: ' + finalTotal[1] + 'ms')

const sorted = sortingAlg()
console.log([...sorted].join() === [...sorted].sort((a,b) => {a -b}).toString())