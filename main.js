// class Person {
//   constructor(firstname,lastname){
//     this.firstname = firstname;
//     this.lastname = lastname
//   }

//   fullName(){
//     console.log(`My name is ${this.firstname} ${this.lastname}`);
//   }

// const fullName=()=>console.log(`My name is ${this.firstname} ${this.lastname}`);
// }


// class Student extends Person {
//   constructor(f,l){
//     super(f,l)
//   }
// }

// let sam = new Student("Sam","Smith");
// sam.fullName();

//-----------let and const---------


// const data = {a:11}
// if(data === ""){
//   let a  = 1;
// }
// console.log(a);

//--------------------ARROW FUNC-----------------

// const myfunction = (data) => `${data} eyh!!`
// console.log(myfunction("life is gud!!"));

let num_array = [1,2,4,5,7,8,9,10];
//num_array.forEach((e)=>e>5?console.log(e):null);
//num_array.filter((e)=>e>5).forEach(e=> e>7?console.log(e):null);
 

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(e=>e.json()).then(e=>console.log(e));


//--------async function------------

const asyncData = async (userName)  => {
  let id = null;
  
  await fetch('https://jsonplaceholder.typicode.com/users')
  .then(e=>e.json())
  .then(e=> e.forEach(e => e.name === userName ? id = e.id : null));

  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(response => response.json())
  .then(json => console.log(json))
}

asyncData("Mrs. Dennis Schulist");









