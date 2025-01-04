// class Identity {
//  public email:string
//   name:string
// readonly city:string = "" // it is because it is not inside the constructor
//   constructor(email:string, name:string) {
//     this.email = email;
//     this.name = name
//   }
// }
// const identity = new Identity ("k@gmail.com","fifa")
class Identity {
// private public protected
 protected _courseCount = 1
 
  readonly city:string = "" // it is because it is not inside the constructor
  constructor( public email:string, public  name:string, /*private userId:string*/){}

  private deleteToken(){
    console.log("")
  }

get getAppleEmail():string{
  return `apple${this.email}`
}
 get courseCount():number{
  return this._courseCount
 }
 // a setter can not be void or it cannot have any data types 
 set courseCount(courseNumber){
   if(courseNumber <= 1){
    throw new Error("course count should be more than one")
   }
   this._courseCount = courseNumber
 }
 
 
}
class SubUser extends Identity{
  isFamily:boolean = true
  changeCourseCount(){
   this._courseCount = 4

  }
}
const identity = new Identity ("k@gmail.com","fifa")

