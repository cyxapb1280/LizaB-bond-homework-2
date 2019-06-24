const Unit = require('./Unit');

function Doctor (name){
    Unit.apply(this, arguments)
    this._healPower = 10
    this._stdXp = 250
}

Doctor.prototype = Object.create(Unit.prototype)

Doctor.prototype.heal = function(unit){
    if (!this.isAlive()) console.log(this.getName() + 'Is Dead!')

    healed = 0
    if(unit.isAlive()){
        healed = Math.round(this._healPower*this.getLevel()*0.1)
        unit.addHealth(healed)
        this._earnExperiance(this._stdXp/this.getLevel()*0.1)
    }
    return healed
}

module.exports = Doctor
