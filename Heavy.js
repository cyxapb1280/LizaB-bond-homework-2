const Soldier = require('./Soldier');

function Heavy (name){
   Soldier.apply(this, arguments)
    this._resistance = 0.1
    this._stdXp = 250
}

//Heavy.prototype.__proto__ = Soldier.prototype
Heavy.prototype = Object.create(Soldier.prototype)
Heavy.prototype.machineGunAttack = function(unit, amountOfShots){
    if (!this.isAlive()) console.log(this.getName() + 'Is Dead!')
    dmg = 0
    if(unit.isAlive()){
        dmg = Math.round(this._attackPower*this.getLevel()*0.1*amountOfShots)
        unit.takeDamage(dmg)
        this._earnExperiance(this._stdXp/this.getLevel()*0.1)
    }
    return dmg
}

Heavy.prototype.takeDamage = function(amount){
    amount -= amount*this._resistance
    this._health -= Math.round(amount)
    if(this._health < 0) this._health = 0

    if (this.isAlive()) this._earnExperiance(this._XP_FOR_DAMAGE)
}

module.exports = Heavy