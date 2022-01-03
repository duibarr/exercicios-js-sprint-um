const show = str => console.log(str)

let person = {
    name: 'Batman',
    power: ''
}

//solution 1 
function givePower(power) {
    return person.power = power
}

//solution 2 
function givePower2(power) {
    return person["power"] = power
}

givePower("Bullet Proof")
show(person)
givePower2("Invisibility")
show(person)