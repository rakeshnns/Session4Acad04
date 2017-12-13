var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class decorator
let DECOrator = class DECOrator {
    constructor(name) {
        this.Name = name;
    }
    //Method Deocrator
    NAME() {
        console.log(`My Name is ${this.Name}`);
    }
};
__decorate([
    MethodDeco
], DECOrator.prototype, "NAME", null);
DECOrator = __decorate([
    ClassDecoParm("Rakesh")
], DECOrator);
// Function for class decorator
function ClassDecoParm(NAME) {
    return function (target) {
        console.log(`Class Decorator`);
        console.log(`My Name is :${NAME} Target ${target}`);
    };
}
//Function for Method Decorator
function MethodDeco(target, propertyKey, descriptor) {
    console.log(`Method Decorator`);
    console.log(`Method Decorator Target :`, target);
    console.log(`Method Decorator propertyKey :`, propertyKey);
    console.log(`Method Decorator descriptor :`, descriptor);
}
/*
tsc --target ES6 --experimentalDecorators Decorators.ts
node Decorators.js
*/ 
