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

//exercise
console.log('');
console.log('Exercise Object Equality');
console.log('');

const address4 = new Address('aaa', 'bbb', 'ccc');
const address5 = new Address('aaa', 'bbb', 'ccc');
const address6 = address4;

function areEqual(address4, address5) {
    for (const key4 in address4) {
        for (const key5 in address5) {
            if(address4[key4] === address5[key5]){
                console.log(`${address4[key4]} is equal to ${address5[key5]} `);
            }
        }
    }return true;
};

function areEqualProfessors(address4, address5) {
    return address4.street === address5.street && address4.city === address5.city && address4.zipCode === address5.zipCode;
};

console.log(areEqual(address4, address5));
console.log(areEqualProfessors(address4, address5));

function areSame(address4, address5){
   return address4 === address5
};

console.log(areSame(address4, address5)); // in this case they are not point to the same object in the memory
console.log(areSame(address4, address6)); // but in this case they are, because address6 receive this value. address4 and 6 were created as a new object so they get their own address in memory.

//exercise
console.log('');
console.log('Exercise Blog Post Object');
console.log('');

// create a object that should have
// title
// body
// author
// views
// comments
//      (author, body)
// isLive, true or false

const blogPost = {
    title: 'h1',
    body: 'everything here',
    author: 'Igor Cordeiro',
    views: 10,
    comments: [
        {author: 'Cordeiro Igor', body: 'text here'},
        {author: 'Cordeiro Igor', body: 'text here'}
    ],
    isLive: true
}

console.log(blogPost)

//exercise
console.log('');
console.log('Exercise Constructor Functions');
console.log('');

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Post('a', 'b', 'c');

console.log(post);

//exercise
console.log('');
console.log('Exercise Price Range');
console.log('');

// create an array of objects, each object called a price range object. only 3, and think what properties each object should have.

const priceRanges = [
    {
        type: 'Inexpensive',
        symbol: '$',
        itens: { 
            item: 'a',
            item: 'b'
        }
    },
    {
        type: 'Moderate',
        symbol: '$$',
        itens: { 
            item: 'a',
            item: 'b'
        }
    },
    {
        type: 'Pricey',
        symbol: '$$$',
        itens: { 
            item: 'a',
            item: 'b'
        }
    }
];