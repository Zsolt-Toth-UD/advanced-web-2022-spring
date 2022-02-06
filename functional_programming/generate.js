const fs = require('fs');
const path = require('path');
const {faker} = require('@faker-js/faker')

const generateProduct = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(1, 150, 2),
        category: faker.commerce.department()
    }
}

const generateCustomer = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    return {
        id: faker.datatype.uuid(),
        name: {
            firstName: firstName,
            lastName: lastName
        },
        email: faker.internet.email(firstName, lastName)
    }
}


const generateOrder = ({products, customers}) => {
    const customer = faker.random.arrayElements(customers, 1);
    const orderedProductCount = faker.datatype.number({min: 1, max: 10});
    const orderedproducts = faker.random.arrayElements(products, orderedProductCount)
    return {
        id: faker.datatype.uuid(),
        customer: customer[0],
        orderedproducts: orderedproducts
    }
}

const generateRecords = (generator) => (args) => (n) => {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(generator(args))
    }
    return result;
}

const generateCustomers = generateRecords(generateCustomer)();

const generate = generateRecords(generateProduct)();

// const generateOrders = (n) => {
//     let result = [];
//     for(let i = 0; i < n; i++){
//         result.push(generateOrder(pro))
//     }
// }

// console.log({product: generateProduct()})

const products = generate(parseInt(1e4))
const customers = generateCustomers(parseInt(1e3))
const orders = generateRecords(generateOrder)({products, customers})(parseInt(1e2));

if(!fs.existsSync(path.join(__dirname, 'data'))){
    fs.mkdir(path.join(__dirname,'data'), (err => {console.error({error: err})}));
}
fs.writeFileSync(path.join(__dirname,'data','products.json'), JSON.stringify(products), {encoding: 'utf-8', flag: 'w'});
fs.writeFileSync(path.join(__dirname,'data','customers.json'), JSON.stringify(customers),{encoding: 'utf-8', flag: 'w'});
fs.writeFileSync(path.join(__dirname,'data','orders.json'), JSON.stringify(orders),{encoding: 'utf-8', flag: 'w'});

console.log({order: generateOrder({products, customers})})
console.log({orders})
