// Mapped Type
{


    const arrOfNumbers: number[] = [1, 2, 3, 4, 5]
    // const arrOfStrings: string[] = ['1', '2', '3', '4', '5'] // it can be done by mapped type.

    const arrOfStrings: string[] = arrOfNumbers.map((item) => item.toString())
    console.log(arrOfStrings);


    type Area = {
        height: string,
        width: string;
    }
    type Height = Area['height']; //look up type


    type AreaNumber = {
        height: number,
        width: number;
    }

    // type AreaString = {
    //     [key in keyof AreaNumber]: string
    // }

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }
    
    const area1: AreaString<{ height: string; width: number; }> = {
        height: '100',
        width: 200
    }



}