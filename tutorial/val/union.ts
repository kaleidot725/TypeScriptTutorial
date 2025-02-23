function printNumber(label: string, number: number) {
    console.log(label, number)
}

let numberOrUndefined1: number | undefined = 0
let numberOrUndefined2: number | undefined = undefined

printNumber("Number1OrUndefined1", numberOrUndefined1)
printNumber("Number1OrUndefined2", numberOrUndefined2)

if (typeof numberOrUndefined1 === 'number') {
    let number1: number = numberOrUndefined1
    printNumber("number1", number1)
}

if (typeof numberOrUndefined2 === 'number') {
    let number2: number = numberOrUndefined2
    printNumber("number2", number2)
}
