
const returnDivision = (a: number, b: number) : number => {
    return (a / b)
}

type AddDivision = (a: number, b: number) => number 

interface Divido {
    a: number; b: number

}

const divide = (
    a: number,
    b: number,
    returnDivision: AddDivision
    ) => {
        return returnDivision(a, b);
    }

const defFuncResult2 = divide(6, 6, returnDivision)

console.log(defFuncResult2)