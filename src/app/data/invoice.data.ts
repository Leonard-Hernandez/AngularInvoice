import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
    id:1,
    name:'componentes de pc',
    client: {
        name: 'Lubraska',
        lastname: 'Ferreira',
        address: {
            country: 'Colombia',
            city: 'Cucuta',
            street: 'Calle 1',
            number: 14,
        }
    },
    company: {
        name: 'Golden Moon',
        fiscalNumber: 123456789,
    },
    items: [
        {
            id: 1,
            product: 'mouse',
            price: 100,
            quantity: 1,
        },
        {
            id: 2,
            product: 'teclado',
            price: 200,
            quantity: 5,
        },
        {
            id: 3,
            product: 'monitor',
            price: 300,
            quantity: 3,
        },
    ]
}