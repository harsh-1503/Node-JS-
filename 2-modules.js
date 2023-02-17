//CommonJS :- Evry file is module (by default)
//Modules  :- Encapsulated code (Only share minimum)

const names = require('./3-names')
const sayHi = require('./4-utils')

const data = require('./5-alternativeFlavours')
// console.log(data)
console.log(names)
console.log(sayHi)

sayHi(names.john)
sayHi(names.peter)
sayHi('harsh')

require('./6-mind-grenade')