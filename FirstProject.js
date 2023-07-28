
// console.log('Hello World')

// Fat Arrow : - 

const Student ={
    name :'vaibhav',
    age : 24, 

     greet : function (){
        console.log(` Hi My name is  ${this.name}`)                       // Hi My name is vaibhav
     },


     greet2 :() => {
        console.log(` Hi My name is  ${this.name}`)                       //Show undefined here caz fat arrow dont have this keyword it take it from its parent .
     }
}

Student.greet()
Student.greet2()