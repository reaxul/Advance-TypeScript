// generic with interface
{



    interface Developer<T, U = null> {
        name: string,
        age: number,
        computer: T,
        mobile?: U
    }

    const developer1: Developer<string> = {
        name: "sajjad",
        age: 22,
        computer: "HP"
    }

    const developer2: Developer<{ ram: number, processor: string }, object> = {
        name: "sajjad",
        age: 22,
        computer: {
            ram: 16,
            processor: "intel"
        },
        mobile: {
            ram: 8,
            processor: "snapdragon"
        }
    }





}