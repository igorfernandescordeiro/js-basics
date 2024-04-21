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