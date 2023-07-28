/*Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps*/

let array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

let resultArray = array.map((arr)=>{
       if(arr === ' ')
       {
        return 'empty_string'
       }

       return arr
})

console.log(resultArray)




//===========================

// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }



//================================

const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)