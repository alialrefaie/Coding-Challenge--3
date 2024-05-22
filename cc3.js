U72955273
// Car Class

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }



// Accelerate method

accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

// Brake method

brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    }

// Create and Test Car Objectives

// Car 1: BMW starting at 120 km/h
let car1 = new Car('BMW' , 120);

//Car 2: Mercedes starting at 95 km/h
let car2 = new Car('Mercedes' , 95);

// Test accelerate and brake methods on car 1
car1.accelerate(); // BMW is going at 130 km/h
car1.accelerate(); // BMW is going at 140 km/h
car1.brake() // BMW is going at 135 km/h
car1.brake() // BMW is going at 130 km/h

// Test accelerate and brake methods on car 2
car2.accelerate(); // Mercedes is goign at 105 km/h
car2.accelerate(); // Mercedes is going at 115 km/h
car2.brake(); // Mercedes is going at 110 km/h
car2.brake(); // Mercedes is going at 105 km/h