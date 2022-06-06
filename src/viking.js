// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
  super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }

}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }

  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomSaxon = Math.floor(Math.random()*(this.saxonArmy.length));
    let vikingDamage = Math.floor(Math.random()*(this.vikingArmy.length));

    let damageToSaxon = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[vikingDamage].strength);

    if(this.saxonArmy[randomSaxon].health < 0) {
      this.saxonArmy.splice(randomSaxon);
    }

    return damageToSaxon;
  }

  saxonAttack() {
    let randomViking = Math.floor(Math.random()*(this.vikingArmy.length));
    let saxonDamage = Math.floor(Math.random()*(this.saxonArmy.length));

    let damageToViking = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[saxonDamage].strength);

    if(this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking);
    }

    return damageToViking;
  }


  //OPCIONAL SIN TEST
  attack(attacker) {

    let randomAttacker, randomDeffender;

    if(attacker.hasOwnProperty("name")) {

      randomAttacker = Math.floor(Math.random()*(this.vikingArmy.length));
      randomDeffender = Math.floor(Math.random()*(this.saxonArmy.length));
      
      let damage =  this.saxonArmy[randomAttacker].receiveDamage(this.vikingArmy[randomDeffender].strength);

      if(this.saxonArmy[randomDeffender].health < 0) {
        this.saxonArmy.splice(randomDeffender);
      }

      return damage;

    } else {

      randomAttacker = Math.floor(Math.random()*(this.saxonArmy.length));
      randomDeffender = Math.floor(Math.random()*(this.vikingArmy.length));

      let damage = this.vikingArmy[randomDeffender].receiveDamage(this.saxonArmy[randomAttacker].strength);

      if(this.vikingArmy[randomAttacker].health <= 0) {
        this.vikingArmy.splice(randomDeffender);
      }

      return damage;

    }

  }


  showStatus() {
    
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }

    if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }

    if(this.vikingArmy.length === this.saxonArmy.length) {
      return "Vikings and Saxons are still in the thick of battle.";
    }

  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
