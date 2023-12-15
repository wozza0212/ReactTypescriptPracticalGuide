
const returnMultiplication = (a: number, b: number) : number => {
    return (a * b)
}

const multiply = (
    a: number,
    b: number,
    returnMultiplication: (a: number, b: number) => number 
    ) => {
        return returnMultiplication(a, b);
    }

const defFuncResult = multiply(6, 6, returnMultiplication)

console.log(defFuncResult)