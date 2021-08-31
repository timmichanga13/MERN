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
        this.sayName;
        console.log(this.strength);
        console.log(this.speed);
        console.log(this.health);
        return this;
    }

    drinkSake(){
        this.health = this.health + 10;
        return this.health;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();