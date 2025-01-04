// combination of two or more data types
let score:number | string = 33
score = 44

type Users = {
  name:string;
  id:number;
  
}
type Admin = {
  user_name:string;
  id:number;

}

let kehinde:Users | Admin = {
  name: "kehinde",
  id:44
}
function getDBId(id:number| string){
 // console.log(`getDBId is ${id}`);
// id.toLowerCase()
if(typeof id === 'string'){
  id.toLowerCase();
}
//id + 2
}
// Union in Arrays
const data: (number | string | boolean)[] = [1 ,2 ,3, 4]