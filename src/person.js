export class Person {
    constructor(firstName, earthAge){
        this.firstName = firstName;
        this.earthAge = earthAge
    }
    calculateAge(planet){
        let planetAge;
        if (planet === "Mercury"){
            planetAge = this.earthAge * 0.24;
            return planetAge;
        } else if (planet === "Venus") {
            planetAge = this.earthAge * 0.62;
            return planetAge;
        } else {
            return "Invalid planet!"
        }

    }

}