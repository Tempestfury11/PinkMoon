// Object basics
// const person = {
//     firstName: 'Peter',
//     lastName: 'Henk',
//     age : 30,
//     calculateSalary: (hrs, rate)=> {
//         return hrs * rate;
//     }
// }
// console.log(`
// Name: ${person.firstName}
// Surname: ${person.lastName}
// Age: ${person.age}
// Salary: R${person.calculateSalary(50, 650)}`);
// if(person.hasOwnProperty('salary')) {
//     console.log(person['age']);
// }else {
//     console.warn('Key was not found');
// }
// Factory function
// function Employee(name, surname, company) {
//     return {
//         name: name,
//         surname: surname,
//         company: company,
//         display: ()=> {
//             document.write(`
//             <br>Name: ${name}<br>
//             Surname: ${surname}<br>
//             Company Name: ${company}<br>`);
//         }
//     }
// }
// let emp1 = Employee('Joel', 'Mukanya', 'Life Choices');
// let emp2 = Employee('Henk', 'Peter', 'MR D');
// let emp3 = Employee('Amanda', 'Gudlwa', 'Microsoft');
// Display all info
// emp1.display();
// emp2.display();
// emp3.display();
/*
Factory function practice
=========================
1. Write a function that accepts three parameters: name, hours, and rate.
2. Please return an object with two properties.
name and salary.
salary, should be a function that will return a person's salary.
3. Create two objects with the below examples:
- employee1: Name: Peter, Salary: 40 * 500
- employee2: Name: Samuel, Salary: 80 * 300
*/
// function Practice(name, hours, rate) {
//     return {
//         name: name,
//         salary: ()=>{
//             return hours * rate;
//         }
//     }
// }
/*
Name: ...
Salary: R...
*/
// Constructor function
// function Shop(name, address) {
//     this.name = name,
//     this.address= address
// }
// Create an object
// const shop1 = new Shop('DJ', '27 Strand str CBD');
// console.log(`
// Name: ${shop1.name}
// Address: ${shop1.address}`);
// console.log('==========');
// const shop2 = new Shop('Edgars', 'CBD');
// console.log(`
// Name: ${shop2.name}
// Address: ${shop2.address}`);
// Dynamic nature of
// let data = 32;
// console.log(data);
// console.log(typeof data);
// data = 'Joel';
// console.log(data);
// console.log(typeof data);
// data = true;
// console.log(data);
// console.log(typeof data);
// let firstName = 'Joel';
// firstName[0] = 'M';
// console.log(firstName);
// let names = ['Joel', 'Hannah', 'Kagiso'];
// console.log(names);
// names[0] = 'Godwin';
// console.log(names);
// Talk about mutable and immutable
// Different ways you can clone an object
// console.log(person);
// let employee = person;
// employee['salary'] = 39000;
// console.log(employee);
// console.log(person);
// Spread operator
// let employee = {... person};
// console.log(person);
// employee['salary'] = 40000;
// console.log(employee);
// console.log(person);
// Object.assign()
// console.log(person);
// let employee = Object.assign({}, person);
// console.log(employee);
// Enumerating object
// let person = {
//     name: 'Godwin',
//     surname: 'Dzvapatsra',
//     jobTitle: 'Head Of Curriculum'
// }
// for(let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }
// We will get an error
// for(let p of person) {
//     console.log(p);
// }
// map : will give us an error
// person.map(p => {
//     console.log(p);
// });
//
// Object.keys(person).forEach(key => {
//     console.log(key);
// });
/*
- .keys()
- values()
- .entries()
*/
// let entries = Object.entries(person);
// console.log(entries);
// let listOfKeys = Object.keys(person);
// console.log(listOfKeys);
// let listOfValues = Object.values(person);
// console.log(listOfValues);
// let listOfEntries = Object.entries(person);
// console.log(listOfEntries);

// let person = {name : 'Peter',surname: 'Cake',age: 40}
// let p1 = structuredClone(person);
// console.log(person);
// console.log(p1);

// JSON.parse
// let person1 = {'name': 'Peter','surname': 'Cake','count': 40}
// let p2 = JSON.parse(JSON.stringify(person1));
// console.log(p2.name);
// console.log(p2.surname);
// console.log(p2.count);
// document.write(p2.name);
// document.write(p2.surname);
// document.write(p2.count);
// Adding element 5 to position 2,
// splice(position, num)
// If num is zero, then do not remove any element after
// the current position.
// data.splice(3, 0,  5);
// console.log(data);
// console.log("===============")
// data.splice(3, 4,  5);
// console.log(data);
