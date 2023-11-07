//generic type
{

    type GenericArr<T> = Array<T>;

    // const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numberArray: GenericArr<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // const stringArray: string[] = ["sajjad", "rakib", "sakib", "sajib"];
    // const stringArray: Array<string> = ["sajjad", "rakib", "sakib", "sajib"];
    const stringArray: GenericArr<string> = ["sajjad", "rakib", "sakib", "sajib"];

    // const booleanArray: boolean[] = [true, false, true, false];
    // const booleanArray: Array<boolean> = [true, false, true, false];
    const booleanArray: GenericArr<boolean> = [true, false, true, false];



    const user: GenericArr<{ name: string, age: number }> = [
        { name: "sajjad", age: 22 },
        { name: "rakib", age: 22 },
    ]




    //generic tuple
    type GenericTuple<T, U> = [T, U];
    const tuple: GenericTuple<string, number> = ["sajjad", 22];
    const tuple2: GenericTuple<number, string> = [22, "sajjad"];
    
    const userTuple: GenericTuple<string, { name: string, age: number }> =
        [
            "sajjad",
            {
                name: "sajjad",
                age: 22
            }
        ];










}