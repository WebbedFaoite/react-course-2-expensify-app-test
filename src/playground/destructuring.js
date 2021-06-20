/**************************************************** 
* 
* Object Destructuring
*
****************************************************/




/*
const person = {
  name: 'Andrew',
  age: 27,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;

if(city && temperature){
  console.log(`Its ${temperature} in ${city}.`);
}
*/

/* CHALLENGE   */
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
  //  name: 'Penguin'
  }
};

/* CHALLENGE. Create a new local const called publisherName instead of 
using the same 'name' as above. Also create a default value of 
'Self-Publish, if there is no value inside of book.publisher.name'

const { name: publisherName = 'Self-Publish' } = book.publisher;

 CHALLENGE CONTINUED. Print the result to the console...  
console.log(publisherName);

 END OF CHALLENGE  */



/**************************************************** 
* 
* Array Destructuring
*
****************************************************/
//const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//const [, city, state='New York'] = address;
//console.log(`You are in ${city} ${state}`);

//CHALLENGE
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

//CHALLENGE Creating the new array. Excluing the fourth element and 
// just putting in a comma for the second element
const [Coffee, , price_medium] = item;

//CHALLENGE. grab first and third items using array destructuring
console.log(`A medium sized ${Coffee} costs ${price_medium}`);


