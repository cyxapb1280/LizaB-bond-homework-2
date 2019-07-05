function Unit(inName) {
  Unit.maxHealth = 100
  Unit.maxXpForLevel = 1000
  Unit.xpForDamage = 500

  if (!inName) {
    throw new Error('Name can\'t be empty')
  }

  this._health = Unit.maxHealth
  this._name = inName
  this._level = 1
  this._xp = Unit.maxXpForLevel
}

Unit.prototype.getName = function () {
  return this._name
}

Unit.prototype.getLevel = function () {
  return this._level
}

Unit.prototype.isAlive = function () {
  return this._health > 0
}

Unit.prototype.addHealth = function (amount) {
  if (!this.isAlive()) {
    return
  }

  this._health += amount

  if (this._health > Unit.maxHealth) {
    this._health = Unit.maxHealth
  }
}

Unit.prototype.takeDamage = function (amount) {
  this._health -= amount

  if (this._health < 0) {
    this._health = 0

    return
  }

  this._earnExperience(Unit.xpForDamage)
}

Unit.prototype.info = function () {
  return [
    this._name,
    this._health,
    this._level,
    this._xp
  ]
}

Unit.prototype._levelUp = function () {
  if (this._xp < Unit.maxXpForLevel) {
    return
  }

  this._level += 1
  this._xp -= Unit.maxXpForLevel
}

Unit.prototype._earnExperience = function (amount) {
  this._xp += Math.round(amount)

  this._levelUp()
}

module.exports = Unit
