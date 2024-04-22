//exercise
console.log('');
console.log('Exercise Address Object');
console.log('');
const address = { 
    street: 'Dom João',
    city: 'Salvador',
    zipCode: 40285000,
    showAddress(){
        console.log(`The address is ${this.street} street from the city ${this.city} and the zipcode is: ${this.zipCode}`);
    }
};

address.showAddress();

const address2 = {
    street: 'a',
    city: 'b',
    zipeCode: 'c'
};

function showAddress2(address2) {
    for (const key in address2) {
        console.log(key, address2[key])
    }
};

showAddress2(address);
showAddress2(address2);

//exercise
console.log('');
console.log('Exercise Factory and Constructor Function');
console.log('');

function address3(street, city, zipCode){ // Factory Function
   return{
    street,
    city,
    zipCode
    }; 
};

function Address(street, city, zipCode){ // Constructor Function
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

const factoryAddress = address3('aa', 'bb', 'cc');
const constructorAddress = new Address('aaa', 'bbb', 'ccc');

console.log(factoryAddress);
console.log(constructorAddress);


console.log('');
console.log('Exercise Object Equality');
console.log('');