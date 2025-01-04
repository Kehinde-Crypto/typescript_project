//const User =  {
  // name: "Kehinde",
   //email: "kehinde@gmail.com",
   //isActive: true 
//}
 //function createUser({name:string,isPaid:boolean}){}

 //let new_user = {name:"hastes", isPaid:false,email:"h@gmail.com"}
 //createUser(new_user)
 //createUser({name:"kehinde",isPaid:false})

  //function createCourse():{name:string , price:number} {
   //return{name:"kehinde", price:400}
  //}


  //type User = {
   //name:string;
    //email:string;
    //isActive:boolean;
  //}
  //type myString = string
 //function createUser(user:User):User{
   //return 
 //}
 type User = {
   readonly _id:string; // you will not be able to change it
   name:string;
   email:string;
   isActive:boolean;
   creditcardDetails?:number; // depends
 }
let myUser:User = {
   _id:"1234",
   name:"John",
   email:"john@example.com",
   isActive:true
}

// match and misk
type cardNumber = {
   cardNumber:string,
}
type cardDate = {
   cardDate:string
}

type cardDetails = cardNumber & cardDate & {
   cvv:number
}
myUser.email = "John@example.com";

 export {}
 