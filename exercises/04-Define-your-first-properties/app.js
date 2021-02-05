class Person{
    //your properties here, remember the constructor
    constructor(newName,newLastName,newBirthDate){
        this.name = newName;
        this.lastName = newLastName;
        this.birthDate = newBirthDate;
    }
}

let mrBob = new Person("Bob", "Dylan", "May 24, 1941");
    console.log(mrBob);