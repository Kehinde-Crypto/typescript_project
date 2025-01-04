//type User = {
  //email: string,
  //userId:number
//}

// to be able to create a new user an instance
interface User  {
  readonly db_id:number,
  email: string,
   userId:number,
   googleId ?: string
   // the way you can define a method
   startTrail():  string
   getCoupon(couponname:string , value:number):number 
} 

interface User{
  githubId:string
}

interface Admin extends User{
 role:"first_value"|"admin"|"second_value"
}

const hitesh:Admin = {db_id:14, email: "", userId:44 , googleId:"",
  githubId:"", 
  role:"first_value",
  startTrail:() => {
      return "trail started"
  },
  getCoupon(name:"kehinde") {
      return 14
  },
}
hitesh.email = "k@k.com";