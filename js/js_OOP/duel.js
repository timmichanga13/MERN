class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        //reduce target res by power
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, stat, magnitude, text){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = text;
    }

    cast(target){
        // raise/lower (magnitude) the target's resilience/power (stat) by amount (magnitude) => text
        if( target instanceof Unit ) {
            if (this.stat == 'res'){
            target.res += this.magnitude;
            }
            if (this.stat == 'power'){
                target.power += this.magnitude;
                }
        }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

// turn 1
const red = new Unit('Red Belt Ninja', 3, 3, 4);
const hardAlgo = new Effect('Hard Algorithm', 2, 'res', 3, "Increases the target's resilience by 3.");
hardAlgo.cast(red);

// turn 2
const black = new Unit('Black Belt Ninja', 4, 5, 4);
const upr = new Effect('Unhandled Promise Rejection', 1, 'res', -2, "Reduces the target's resilience by 2.");
upr.cast(red);

// turn 3
const pp = new Effect('Pair Programming', 3, 'power', 2, "Increases the target's power by 2.");
pp.cast(red);
red.attack(black);
