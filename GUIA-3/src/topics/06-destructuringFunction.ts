/* //* otra forma de destructuring es en funciones, 
 //* para esto se puede usar el mismo concepto pero con objetos o 
 //* arrays, dependiendo de lo que se quiera destructurar. */
export interface Product {
    description: string;
    price: number,
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const phonde: Product = {
    description: 'iPhone 14 Pro',
    price: 999.99,
}

const tablet: Product = {
    description: 'iPad Pro',
    price: 799.99,
}

/* const ShoppingCart: Product[] = [phonde, tablet]
const tax = 0.07

 */
export function taxCalculation(options: TaxCalculationOptions):[number,number]{
    let total = 0;
    options.products.forEach(({price}) => {
        total += price;
    })
    return [total * options.tax, total];
}

/* const [taxAmount,total] = taxCalculation({
    products: ShoppingCart,
    tax,
})

console.table({taxAmount, total})
 */