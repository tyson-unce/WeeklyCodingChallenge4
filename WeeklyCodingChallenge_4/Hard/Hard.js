const tomMass = 8
const tomHeight = 9
const jerryMass = 45
const jerryHeight = 10

let tomBMI = tomMass / (tomHeight*tomHeight)
let jerryBMI = jerryMass / (jerryHeight*jerryHeight)

let tomHigher = tomBMI > jerryBMI

console.log(`Is Tom's BMI higher than Jerry's? ${tomHigher}`)