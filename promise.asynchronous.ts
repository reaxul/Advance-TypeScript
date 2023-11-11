//promise
{



    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data: string = "hello world"
            if (data) {
                resolve(data)
            } else {
                reject("something went wrong")
            }
        });
    }

    type ToDo = {
        userId: number,
        id: number,
        title: string,
        completed: boolean

    }
    const getToDo = async (): Promise<ToDo> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await res.json()
        // console.log(data);
        return data;
    }

    getToDo();

}