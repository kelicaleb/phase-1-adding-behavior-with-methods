// Your code here
class Cat{
    constructor(name, gender){
        this.name = name 
        this.gender = gender;
    }
    speak(){
        return `${this.name} says meow!`
    }
}
let cat = new Cat("Sasha", 'female');
console.log(cat.speak())

class Dog{
    constructor(name, gender){
        this.name = name ;
        this.gender = gender ;
    }
    speak(){
        return `${this.name} says woof!`
    }
}
class Bird{
    constructor(name, gender){
        this.name = name ;
        this.gender = gender;
    }
    speak(){
        if(this.name == "Pablo"){
            return `It's me! ${this.name}, the parrot!`
        }
        else if(this.name == "Mable"){
            return `${this.name} says squawk!`
        }
    }
   
}
