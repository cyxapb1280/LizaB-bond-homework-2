const Unit = require('./Unit');

function Soldier (name){
    Unit.apply(this, arguments)
    this._attackPower = 15
    this._stdXp = 250
}

Soldier.prototype = Object.create(Unit.prototype)
Soldier.prototype.handAttack = function(unit){
    if (!this.isAlive()) console.log(this.getName() + 'Is Dead!')
    dmg = 0
    if(unit.isAlive()){
        dmg = Math.round(this._attackPower*this.getLevel()*0.1)
        unit.takeDamage(dmg)
        this._earnExperience(this._stdXp/this.getLevel()*0.1)
    }
    return dmg
}

module.exports = Soldier
