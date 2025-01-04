function detectTypes(val:number| string){
  if(typeof val === 'string'){
   return   val.toLowerCase()
  }
  return val + 3
}
function provideId(id:string | null){
  if(!id){
    console.log("Please provide id");
    return   id?.toLowerCase()
  }

}
 interface User{
  name:string,
  email:string
 }
 interface Admins{
  name:string,
  email:string,
  isAdmin:boolean
 }
 function isAdminAccount(account:User|Admins){
  if("isAdmin" in account){
    return  account.isAdmin
  }
 }

 type Fish = {swim:() => void};
 type Bird = {fly:() => void};

 function isFish(pet:Fish|Bird):pet is Fish{
  return ( pet as Fish).swim !== undefined
 }
function getFish(pet: Fish | Bird) {
  if (isFish(pet)) {
    return "fish food"
  } else {
    return "bird food"
  }
}

interface Circle{
  kind: "circle",
  length:number,
  width:number
  radius:number
}
interface Rectangle{
  kind: "rectangle"
  width:number
}
type Shape = Circle | Rectangle
 function getTrueShape(shape:Shape){
  if(shape.kind === "circle"){
    return Math.PI * shape.radius ** 2
  }
 }