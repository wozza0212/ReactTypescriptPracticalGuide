
const returnMultiplication = (a: number, b: number) : number => {
    return (a * b)
}

type AddMultiplication = (a: number, b: number) => number 

const multiply = (
    a: number,
    b: number,
    returnMultiplication: AddMultiplication
    ) => {
        return returnMultiplication(a, b);
    }

const defFuncResult = multiply(6, 6, returnMultiplication)

console.log(defFuncResult)