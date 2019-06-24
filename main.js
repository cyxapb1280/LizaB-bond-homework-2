const Unit = require('./Unit');
const Soldier = require('./Soldier');
const Heavy = require('./Heavy');
const Doctor = require('./Doctor');

PB = new Doctor("Princess Bubblegum")
Finn = new Heavy("Finn the Human")
Jake = new Heavy("Jake the Dog")
Lich = new Soldier("The Lich")

// displayInfo is old-style & very simply written, without JS spesific fitures, because I'm quite lazy 
function displayInfo(...params){
    console.log()
    maxNameLen = Math.max.apply(null, Array.from(arguments, (argument) => argument[0].length));

    argsArr = Array.from(arguments)
    for(i = 0; i < argsArr.length; i++) {
        arg = argsArr[i]

        tabsCount = Math.floor((maxNameLen - arg[0].length) / 4)
        while (tabsCount > -1) {
            arg[0] += "\t"
            tabsCount -= 1
        }

        line = ''
        arg.forEach(function(elem){
            tabs = '\t'
            if (i > 0 && arg.indexOf(elem) > 0) tabs = '\t\t'
            line += elem + tabs
        })
        console.log(line)
    }
}


console.log('[PLOT]: Console Adventure Time!')
displayInfo(['Name', 'Health', 'Level', 'XP' ],Finn.info(), Jake.info(), PB.info(), Lich.info());

console.log('\n_______ Round 1 _______\n')
console.log("[PLOT]: Jake is coming but Finn can't stand to wait! \n")
console.log(Finn.getName() + ' hits ' + Lich.getName() + ' on '+ Finn.machineGunAttack(Lich, 1) +' points') 
console.log(Lich.getName() + ' hits ' + Finn.getName() + ' on '+ Lich.handAttack(Finn) +' points') 
console.log(Lich.getName() + ' hits ' + Jake.getName() + ' on '+ Lich.handAttack(Jake) +' points')
console.log(PB.getName() + ' healls ' + Finn.getName() + ' on '+ PB.heal(Finn) +' points') 
console.log(PB.getName() + ' healls ' + Jake.getName() + ' on '+ PB.heal(Jake) +' points') 
displayInfo(['Name', 'Health', 'Level', 'XP' ],Finn.info(), Jake.info(), PB.info(), Lich.info());

console.log('\n_______ Round 2 _______\n')
console.log("[PLOT]: Jake came just in time of Lich's attack so he will give a double shot! \n")
console.log(Finn.getName() + ' hits ' + Lich.getName() + ' on '+ Finn.machineGunAttack(Lich, 1) +' points') 
console.log(Jake.getName() + ' hits ' + Lich.getName() + ' on '+ Jake.machineGunAttack(Lich, 2) +' points') 
console.log(Lich.getName() + ' hits ' + Finn.getName() + ' on '+ Lich.handAttack(Finn) +' points') 
console.log(Lich.getName() + ' hits ' + Jake.getName() + ' on '+ Lich.handAttack(Jake) +' points')
console.log(PB.getName() + ' healls ' + Finn.getName() + ' on '+ PB.heal(Finn) +' points') 
console.log(PB.getName() + ' healls ' + Jake.getName() + ' on '+ PB.heal(Jake) +' points') 
displayInfo(['Name', 'Health', 'Level', 'XP' ],Finn.info(), Jake.info(), PB.info(), Lich.info());

console.log('\n_______ Round 3 _______\n')
console.log("[PLOT]: Finn & Jake will normally attack with one shot! \n")
console.log(Finn.getName() + ' hits ' + Lich.getName() + ' on '+ Finn.machineGunAttack(Lich, 1) +' points') 
console.log(Jake.getName() + ' hits ' + Lich.getName() + ' on '+ Jake.machineGunAttack(Lich, 1) +' points') 
console.log(Lich.getName() + ' hits ' + Finn.getName() + ' on '+ Lich.handAttack(Finn) +' points') 
console.log(Lich.getName() + ' hits ' + Jake.getName() + ' on '+ Lich.handAttack(Jake) +' points')
console.log(Lich.getName() + ' hits ' + PB.getName() + ' on '+ Lich.handAttack(PB) +' points')
console.log(PB.getName() + ' healls ' + Finn.getName() + ' on '+ PB.heal(Finn) +' points') 
console.log(PB.getName() + ' healls ' + Jake.getName() + ' on '+ PB.heal(Jake) +' points') 
displayInfo(['Name', 'Health', 'Level', 'XP' ],Finn.info(), Jake.info(), PB.info(), Lich.info());

console.log('\n_______ Round 4 _______\n')
console.log('[PLOT]: Oh no! Lich dare to hurt PB! Finn & Jake will attack with triple shot!\n')
console.log(Finn.getName() + ' hits ' + Lich.getName() + ' on '+ Finn.machineGunAttack(Lich, 3) +' points') 
console.log(Jake.getName() + ' hits ' + Lich.getName() + ' on '+ Jake.machineGunAttack(Lich, 3) +' points') 
console.log(Lich.getName() + ' hits ' + Finn.getName() + ' on '+ Lich.handAttack(Finn) +' points') 
console.log(Lich.getName() + ' hits ' + Jake.getName() + ' on '+ Lich.handAttack(Jake) +' points')
console.log(Lich.getName() + ' hits ' + PB.getName() + ' on '+ Lich.handAttack(PB) +' points')
console.log(PB.getName() + ' healls ' + Finn.getName() + ' on '+ PB.heal(Finn) +' points') 
console.log(PB.getName() + ' healls ' + Jake.getName() + ' on '+ PB.heal(Jake) +' points') 
displayInfo(['Name', 'Health', 'Level', 'XP' ],Finn.info(), Jake.info(), PB.info(), Lich.info());


console.log('\n_______ Round 5 _______\n')
console.log('[PLOT]: Lich becomes weaker, Finn & Jake will attack with 4 shots!\n')
console.log(Finn.getName() + ' hits ' + Lich.getName() + ' on '+ Finn.machineGunAttack(Lich, 3) +' points') 
console.log(Jake.getName() + ' hits ' + Lich.getName() + ' on '+ Jake.machineGunAttack(Lich, 3) +' points') 
console.log(Lich.getName() + ' hits ' + Finn.getName() + ' on '+ Lich.handAttack(Finn) +' points') 
console.log(Lich.getName() + ' hits ' + Jake.getName() + ' on '+ Lich.handAttack(Jake) +' points')
console.log(Lich.getName() + ' hits ' + PB.getName() + ' on '+ Lich.handAttack(PB) +' points')
console.log(PB.getName() + ' healls ' + Finn.getName() + ' on '+ PB.heal(Finn) +' points') 
console.log(PB.getName() + ' healls ' + Jake.getName() + ' on '+ PB.heal(Jake) +' points') 
displayInfo(['Name', 'Health', 'Level', 'XP' ],Finn.info(), Jake.info(), PB.info(), Lich.info());

console.log('\n_______ Round 6 _______\n')
console.log('[PLOT]: Lich is almost dead, Finn & Jake will attack with 1 shot as they are too chuffed now. \n')
console.log(Finn.getName() + ' hits ' + Lich.getName() + ' on '+ Finn.machineGunAttack(Lich, 1) +' points') 
console.log(Jake.getName() + ' hits ' + Lich.getName() + ' on '+ Jake.machineGunAttack(Lich, 1) +' points') 
console.log(Lich.getName() + ' hits ' + Finn.getName() + ' on '+ Lich.handAttack(Finn) +' points') 
console.log(Lich.getName() + ' hits ' + Jake.getName() + ' on '+ Lich.handAttack(Jake) +' points')
console.log(Lich.getName() + ' hits ' + PB.getName() + ' on '+ Lich.handAttack(PB) +' points')
console.log(PB.getName() + ' healls ' + Finn.getName() + ' on '+ PB.heal(Finn) +' points') 
console.log(PB.getName() + ' healls ' + Jake.getName() + ' on '+ PB.heal(Jake) +' points') 
displayInfo(['Name', 'Health', 'Level', 'XP' ],Finn.info(), Jake.info(), PB.info(), Lich.info());

console.log('\n_______ Round 7 _______\n')
console.log('[PLOT]: WHAT??? Lich is still alive???  Finn & Jake will finish him with tipple attack!\n')
console.log(Finn.getName() + ' hits ' + Lich.getName() + ' on '+ Finn.machineGunAttack(Lich, 3) +' points') 
console.log(Jake.getName() + ' hits ' + Lich.getName() + ' on '+ Jake.machineGunAttack(Lich, 3) +' points') 
if (Lich.isAlive()){
    console.log(Lich.getName() + ' hits ' + Finn.getName() + ' on '+ Lich.handAttack(Finn) +' points') 
    console.log(Lich.getName() + ' hits ' + Jake.getName() + ' on '+ Lich.handAttack(Jake) +' points')
    console.log(Lich.getName() + ' hits ' + PB.getName() + ' on '+ Lich.handAttack(PB) +' points')
}
console.log(PB.getName() + ' healls ' + Finn.getName() + ' on '+ PB.heal(Finn) +' points') 
console.log(PB.getName() + ' healls ' + Jake.getName() + ' on '+ PB.heal(Jake) +' points') 
displayInfo(['Name', 'Health', 'Level', 'XP' ],Finn.info(), Jake.info(), PB.info(), Lich.info());

if (!Lich.isAlive()) console.log('\n[PLOT]: Congratulations! Lich is dead!')
