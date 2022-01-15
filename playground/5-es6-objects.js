// Object property shorthand

const firstName = 'Michael'
const userAge = 56

const user = {
    firstName, // shorthand syntax
    age: userAge,
    location: 'O Fallon',
}

console.log(user)

// Object destructuring

const product =  {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const { label:productLabel, stock = 0, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, {label='Empty', stock=0} = {}) => {
    console.log(`type: ${type}, label: ${label}, stock: ${stock}`);
}

transaction('order', product)
transaction('order')