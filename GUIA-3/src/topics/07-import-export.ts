import { taxCalculation, type Product } from "./06-destructuringFunction";


const shoppingCart :Product[] = [
    {
        description: 'iPhone 14 Pro',
        price: 999.99,
    },
    {
        description: 'iPad Pro',
        price: 799.99,
    },
]

const [taxAmount,total] = taxCalculation({
    products: shoppingCart,
    tax: 0.07,
})

console.table({taxAmount, total})