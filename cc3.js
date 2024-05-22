// U72955273
// Car Class

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }



// Accelerate method

accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
}


// Brake method

brake() {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
    }
}

//Create and Test Car Objectives
const car1 = new Car('BMW',120);
const car2 = new Car('Mercedes',95);

console.log("Testing Car 1:");
car1.accelerate(); // Should log: BMW is accelerating. New speed: 130 km/h
car1.accelerate(); // Should log: BMW is accelerating. New speed: 140 km/h
car1.brake(); // Should log: BMW is braking. New speed: 135 km/h
car1.brake(); // Should log: Bmw is braking. New speed: 130 km/h

console.log("Testing Car 2:");
car2.accelerate(); // Should log: Mercedes is accelerating. New speed: 105 km/h
car2.accelerate(); // Should log: Mercedes is accelerating. New speed: 115 km/h
car2.brake(); // Should log: Mercedes is braking. New speed: 110 km/h
car2.brake(); // Should log: Mercedes is braking. New speed: 105 km/h