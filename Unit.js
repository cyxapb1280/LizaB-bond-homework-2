function Unit(inName) {
    this._health = this.maxHealth
    this._name = inName ? this._name = inName : new Error("Name can't be empty")
    this._level = 1
    this._xp = 1000
}

Unit.prototype.maxHealth = 100
Unit.prototype._MAX_XP_FOR_LEVEL = 1000
Unit.prototype._XP_FOR_DAMAGE = 500
Unit.prototype.getName = function(){return this._name}
Unit.prototype.getLevel = function(){return this._level}
Unit.prototype.isAlive = function(){return this._health > 0}
Unit.prototype._levelUp = function() {this._xp >= this._MAX_XP_FOR_LEVEL ? (this._level += 1, 
    this._xp -= this._MAX_XP_FOR_LEVEL) : {}}
Unit.prototype._earnExperiance = function(amount) {
    this._xp += Math.round(amount)
    this._levelUp()
}

Unit.prototype.addHealth = function(amount) {
    if (!this.isAlive()) throw new Error("Unit is dead!")

    this._health += amount
    if(this._health > this.maxHealth) this._health = this.maxHealth
}

Unit.prototype.takeDamage = function(amount){
    this._health -= amount
    if(this._health < 0) this._health = 0

    if (this.isAlive()) this._earnExperiance(this._XP_FOR_DAMAGE)
}

Unit.prototype.info = function(){ return [this._name,this._health, this._level,this._xp]}

module.exports = Unit
