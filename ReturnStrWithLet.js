let person = {
    name: 'Batman',
    power: ''
}
const show = str => console.log(str)


//solution 1 
function givePower(power, feature) {
    person.power = power
    person.feature = feature
    return `O ${person.name} tem o poder de ${person.power} e ${person.feature}.`
    
}

//solution 2 
function givePower2(power, feature) {
    person["power"] = power
    person["feature"] = feature
    return `O ${person.name} tem o poder de ${person.power} e ${person.feature}.`
    
}

show(givePower("Bullet Proof", "Sealth"))
show(givePower2("Invisibility", "Murder Expert"))
