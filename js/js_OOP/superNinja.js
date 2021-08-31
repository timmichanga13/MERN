class Ninja {
    constructor(name, health = 3, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
        return this.name;
    }

    showStats(){
        console.log("name: " + this.name + "; ");
        console.log("Strength: " + this.strength + "; ");
        console.log("Speed: " + this.speed + "; ");
        console.log("Health: " + this.health + "; ");
        return this;
    }

    drinkSake(){
        this.health = this.health + 10;
        return this.health;
    }
}

class Sensei extends Ninja {
    constructor(name, health=210, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("Wise message.")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
