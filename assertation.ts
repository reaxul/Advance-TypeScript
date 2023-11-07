//type assertion || type narrowing
// type assertion is a way to tell typescript compiler that you know better than it does about the type of a value.
{


    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedVa1ue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedVa1ue}`
        }

        if (typeof value === "number") {
            return value * 1000

        }
    }

    const result = kgToGm(2) as number;  //when you know the type better then typescript.
    const result2 = kgToGm("2") as string;



    type CustomError = {
        message: string
    }
    try {
        
    } catch (error) {
        console.log((error as CustomError).message); // i didn't get any error without type assertion
    }

}