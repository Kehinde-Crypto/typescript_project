const SCORE : Array<number> = [];
const names:Array<string> = [];

function identityOne(val:boolean | number):boolean | number{
  return val
}
 function identityTwo(val:any):any{
  return val
 }
  function identityThree<Type>(val:Type):Type{
    return val
  }
  function i<T>(val:T):T{
    return val
  }
   interface Bootle{
     brand:string,
     type:number
   }
   //i<Bootle>({})
   // definition of generics <T>
function getSearchProducts<T>(products:T[]):T{
  const myIndex = 3
  return products[myIndex]
}
// the command is for indication that is not tsx
const getMoreSearchProducts = <T ,>(products:T[]):T => {
  // do some data base operations
  const myIndex = 4
  return products[myIndex]
  
}
interface DataBase{
  connection:string,
  user_name:string,
  pass_word:string
}
function anotherFunc  <T, U extends DataBase>(valOne:T,valueTwo:U):object{
     return {valOne, valueTwo}
}
// you then add it as an object
//anotherFunc(3,{});
interface Quiz{
  name:string,
  type:string
}
interface Course{
  name:string,
  author:string,
  subject:string
}
class Sellable <T>{
  public cart:T[] = []
  addToCart(products:T){
    this.cart.push(products)
  }
}