//utility type
{


    //pick
    type Person = {
        name: string,
        age: number,
        address: string,
        phone: string,
        email?: string
    }

    //pick use to pick a type from anther type
    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">


    //omit
    type ContactInfo = Omit<Person, "name" | "age">


    //Required
    // it is use to make all property required including optional properties
    type RequiredPerson = Required<Person>


    //partial
    // it is use to make all property optional including required properties
    type PartialPerson<Person> = Required<Person>


    //readonly
    // it is use to make all property readonly
    type ReadonlyPerson = Readonly<Person>


    //record
    //it is used to add dynamic type while creating an object
    type RecordPerson = Record<string, unknown>
    const person: RecordPerson = {
        name: "sajjad",
        age: 22,
        hasJob: false
    }




}