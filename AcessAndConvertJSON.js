let json = '{"name": "Batman"}'
const show = str => console.log(str)

//solution 1 
function parser(json) {
    let obj = JSON.parse(json)
    obj.name = "Superman"
    return JSON.stringify(obj)
}

//solution 2 
function parser2(json) {
    let obj = JSON.parse(json)
    obj["name"] = "Superman"
    return JSON.stringify(obj)
}

show(parser(json))
show(parser2(json))