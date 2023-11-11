//constraints
{



    const addCourseToStudent = <T extends {
        name: string;
        age: number;
    }>(student: T) => {
        const course = "Machine Learning With Reaxul Alavhi";
        return { ...student, course }
    }

    const student1 = addCourseToStudent({ name: "rakib", age: 22 })
    const student2 = addCourseToStudent({ name: "sajjad", age: 22, email: "sajjad@gmail.com" })












}