// Car Class
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

}

//Method to increase speed by 10 km/h
accelerate() {
    this.speed=+10;
    console.log(`{this.speed} is going at {this.make} km/h');
}

