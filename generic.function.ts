// function with generic parameters
{


    const createArr = (param: string): string[] => {
        return [param]
    }

    const createArrWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res = createArr('hello')
    const res2 = createArrWithGeneric<number>(5)

    type User = { id: number, name: string }
    const res3 = createArrWithGeneric<User>({ id: 1, name: "sajjad" })



    const createArrWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }
    const res4 = createArrWithTuple<number, string>(5, "hello");
    const res5 = createArrWithTuple<number, { name: string, id: number }>(5, { name: "hello", id: 5 });


    const addCourseToStudent = <T extends { name: string, age: number }>(student: T, course: string): T => {
        return { ...student, course }
    }


    const student1 = addCourseToStudent({ name: "sajjad", age: 22 }, "typescript")
    



    
}