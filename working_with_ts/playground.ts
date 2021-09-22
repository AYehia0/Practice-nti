class Person {
    private _name: string
    private _age: number

    constructor(name:string, age:number){
        this._name = name
        this._age = age
    }
 
    sayHello () {
        console.log(this._age, this._name)
    }

}

class Student extends Person {

    grades: number [] = []

    // private attr
    private _secretKey:number = 0

    constructor (name:string, age:number, grades:number[]) {
        super(name, age)
        this.addGrades(grades)
        this.sayHello()
    }

    // methods 
    public addGrades = (grade:number[]) => {
        this.grades.push(...grade)
    }

    public showGrades = () => {
        console.log(this.grades)
    }

    // private methods 

    private _getNumberOfGrades = () => {
        return this.grades.length
    } 

    // setter and getter 
    // doesn't work with 
    set changeKey (key:number) {
        this._secretKey = key
    }
}

const user = new Student("Ahmed", 20, [3,4,5,9] )

user.showGrades()


// interface is so cool 
interface Sizes {
    // takes either a string or a number
    size: string | number
    quantity: number
}

class Product {
    name: string 
    sizes: Sizes [] = []

    constructor(name:string){
        this.name = name
    }

    // methods 
    public addSizes(sizes: Sizes []){
        this.sizes.push(...sizes)
    }

    // show sizes
    public showSizes() {
        console.log(this.sizes)
    }
}



let p = new Product("P1")
let sizes: Sizes [] = [
    {size: "xl", quantity: 23},
    {size: "m", quantity: 3},
    {size: "l", quantity: 1}
]
p.addSizes(sizes)
p.showSizes()
