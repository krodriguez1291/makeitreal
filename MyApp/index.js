const log = require("./modules/logs");
const faker = require("faker");
const {iva,ivaVehiculo,ivaCanastaFamiliar} = require("./modules/iva");
console.log(iva);
console.log(ivaVehiculo);
console.log(ivaCanastaFamiliar);

console.log("\n\n");
console.log(faker.name.findName());

