function Unit1() {
    var MAX_HALTH = 100
    this._health = MAX_HALTH

    var self = this
}
Unit1.prototype.isAlive = function(){return this._health > 0}
Unit1.prototype.isAliveLambda = () => this._health > 0


MyUnit = new Unit1("Jo")
console.log('MyUnit', MyUnit)
//console.log('MyUnit.isAlive: ', MyUnit.isAlive())
console.log('MyUnit.isAliveLambda: ', MyUnit.isAliveLambda())