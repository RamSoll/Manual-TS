

export function whatIsMyType<T>(argument: T): T {
    return argument
}

const amIsString = whatIsMyType<string>('Hello world')
const amIsNumber = whatIsMyType<number>(123)
const amIsBoolean = whatIsMyType<boolean>(true)
const amIsArray = whatIsMyType<number[]>([1, 2, 3, 4, 5])
const amIsObject = whatIsMyType<{ name: string, age: number }>({ name: 'Sol', age: 25 })

console.log(amIsString.split(' '))
console.log(amIsNumber.toFixed(2))
console.log(amIsBoolean.toString())
console.log(amIsArray.join(' - '))
console.log(amIsObject.name)