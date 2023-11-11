//conditional type
{



    type a1 = boolean;
    type a2 = number;

    type x = a1 extends string ? true : false;
    type y = a1 extends string ? true : a2 extends string ? true : false;



    type Person = {
        bike: string,
        car: string,
        ship: string,

    }

    type Vehicle<T> = T extends keyof Person ? true : false;
    type HasCar = Vehicle<"car">;


}