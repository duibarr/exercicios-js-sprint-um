const show = str => console.log(str)

//solution 1
function run(input) {
    if (input === 'carro') {
        return true
    } else {
        return false
    }
}
  
//solution 2
function run2(input) {
    const result = input === 'carro' ? true : false
    return result
}

//solution 3
function run3(input) {
    if (input !== 'carro') {
        return false
    } else {
        return true
    }
}

show(run("carro"))
show(run2("carro"))
show(run3("carro"))

show(run("car"))
show(run2("car"))
show(run3("car"))