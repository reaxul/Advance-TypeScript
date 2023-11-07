//Interface vs Type Alias

{

    //type alias
    type Roll = number
    const roll: Roll = 1234 //primitive type can only declare with type alias, it can't be done with interface


    
    type User1 = {
        name: string,
        age: number,
    }

    interface User2 {
        name: string,
        age: number,
        address: string
    }

    //type alias
    const user1: User1 = {
        name: "sajjad",
        age: 22,
    }
    //interface
    const user2: User2 = {
        name: "rakib",
        age: 22,
        address: "Dhaka"
    }



    //extend type with type alias
    type User3 = User1 & { role: string }
    const user3: User3 = {
        name: "sajjad",
        age: 22,
        role: "admin"
    }

    //extend type with interface
    interface User4 extends User2 { role: string }
    const user4: User4 = {
        name: "rakib",
        age: 22,
        address: "Dhaka",
        role: "admin"
    }



    //how to use interface with array
    type RollArray = number[]; //type alias
    const rollArray: RollArray = [1, 2, 3, 4, 5]

    //type interface
    interface RollArray2 {
        [index: number]: number
    }
    const rollArray2: RollArray2 = [1, 2, 3, 4, 5]


    //how to use interface with function
    type AddFunction = (x: number, y: number) => number //type alias
    const add: AddFunction = (x, y) => x + y

    //type interface
    interface AddFunction2 {
        (x: number, y: number): number
    }
    const add2: AddFunction2 = (x, y) => x + y





}