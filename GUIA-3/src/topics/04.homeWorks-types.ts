
/*
    ===== Código de TypeScript practica numero 1 =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress():string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Brian',
    age: 24,
    address: {
        street: 'Quinta avenida',
        country: 'Panamá',
        city: 'Colón'
    },
    showAddress():string {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};