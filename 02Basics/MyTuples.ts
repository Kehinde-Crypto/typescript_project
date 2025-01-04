const user:(string| number)[] = [44,'kaka']
const users:(string| number)[] = [44,'kaka']
// In the tuple their is order at which the values are used
let Users : [string, number , boolean] 
Users = ["Kehinde", 44 , true]
let rgb:[number, number, number] = [0, 0, 0]

type USER = [number ,string, boolean ]

const newUser: USER =[122, "example@gmail.com", true ]
newUser[1] = "example@gmail.com"
newUser.push(true)
export{}