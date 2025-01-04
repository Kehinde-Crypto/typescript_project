"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = ""; // it is because it is not inside the constructor
    }
    deleteToken() {
        console.log("");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // a setter can not be void or it cannot have any data types 
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("course count should be more than one");
        }
        this._courseCount = courseNumber;
    }
}
const identity = new Identity("k@gmail.com", "fifa");
