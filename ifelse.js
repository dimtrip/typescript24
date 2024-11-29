/////////////////////////////////////////////////////////
const redCar = {
    model: "audi",
    engineOn: false,
    wheels: 4,
    fuel: 40,
    speed: 0,
    broken: false,
    people: ['John', 'Lucy', 'Marta', 'Fat Joe']}
// Get passengers count, log string "red (Cars Model) was standing by the road with (number) people inside"



// log "(First person from people array) started engine and began to ride", change engineOn value to opposite
// increase car speed by 60, decrease fuel by 3, log "at first car speed was (speed), they had (fuel) left"
// increase car speed by 60, decrease fuel by 5, log "later car speed was (speed), they had (fuel) left"
// check if car speed is more than 100 and passengers count is more than 3// if yes subtract 1 from wheels and change broken to opposite value
// log "while driving at (speed) kmh, one wheel went off so car was forced to stop"// change engineOn to opposite value
// log "(first person name) got out to check the problem, and he saw only (wheels) was left"
// log "ohh no, said (any girl from people array), looks like car was loaded too much, so we lost one wheel"
// log "i have an idea, said (any girl from people array), we should take (last person in people array) out and leave him by the road"
// log "great idea! shouted (first person from people array)"
// remove last person from people array, make oneByTheRoad value to be removed persons namelet oneByTheRoad;
// add one to wheels, change engineOn and broken values to opposite
// log "few moments later car was hitting the road with (people count) passengers inside"
// log "while (oneByTheRoad) was left glancing surly at red (car model) vanishing in horizon"
// check if car speed is less than 100 if yes subtract 6 from fuel
// log "car successfully reached home with (fuel) left and all (people count) people" has context menuheck if person "alive" is true if no, change name to "John is dead person"

//////////////////////////////////////////////////////////////////////////////////////////

let warehouseOfTypes = {items: ['wheel', 'bag', 'ball', {noteOne: 'buy some stuff', noteTwo: 'buy some more stuff'}],
    itemsInWarehouseCount: 0,
    rentPrice: 0,
    warehouseSize: 50,
    budget: 20,
    bankrupt: false,
    notes:
}

// create new key in warehouse object name 'notes', remove last object from items array and make it to be value of 'notes'

// add 3 more random items to items array
warehouseOfTypes.items.push('log','stone','stick')
// make itemsInWarehouseCount to be total length of items in warehouse
let itemsInWarehouseCount = []
// check if there is more than 5 items in warehouse if yes increase warehouse size by 30
// check if warehouse size is more than 60 if yes set rentPrice, rent price is 2.5 per warehouseSize unit, count total price
// check if budget enough to pay the rent, if not, create new key in object warehouseOfTypes named "moneyFromSoldItems" with value 0
// add new key to note "noteThree" which holds string value "Sell some items"
// check if noteThree value is "Sell some items", if yes sell two last items for 30units each, make moneyFromSoldItems value to be selling expresion
// check if you budget is bigger than rent price if not change bankrupt value according to it



