// Car Class
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }



//Accelerate method
accelerate() {
    this.speed+= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}