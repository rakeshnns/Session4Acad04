// Class decorator
@ClassDecoParm("Rakesh")
class DECOrator{
    Name: string;
    constructor(name:string){
        this.Name = name;
    }
    //Method Deocrator
    @MethodDeco
    NAME(){
        console.log(`My Name is ${this.Name}`);
    }
}

// Function for class decorator
function ClassDecoParm(NAME:string){
    return function(target: Function){
       console.log(`Class Decorator`);  
       console.log(`My Name is :${NAME} Target ${target}`);
    }
}

//Function for Method Decorator
function MethodDeco(
    target,
    propertyKey,
    descriptor){
    console.log(`Method Decorator`);    
    console.log(`Method Decorator Target :`,target);
    console.log(`Method Decorator propertyKey :`,propertyKey);
    console.log(`Method Decorator descriptor :`,descriptor);
}

/*
tsc --target ES6 --experimentalDecorators Decorators.ts
node Decorators.js
*/