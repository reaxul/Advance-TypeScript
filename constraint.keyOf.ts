// generic constraint with keyof operator
{



    type Vehicle = {
        bike: string,
        car: string,
        bus: string,
    }
    type owner = "bike" | "car" | "bus"
    type owner2 = keyof Vehicle

    const person1: owner2 = "bus"
    const person2: owner = "bike"


    const gerPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: "sajjad",
        age: 22,
        email: "sajjad@gmail.com",
    }

    const car = {
        model: "Tesla",
        price: 100000,
    }
    
    const result = gerPropertyValue(user, "name")
    const result2 = gerPropertyValue(car, "price")

    console.log(result,result2);



}