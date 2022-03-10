"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageFactory = void 0;
const factoryPerson_1 = require("./factoryPerson");
class UsageFactory {
    static client() {
        return factoryPerson_1.FactoryPerson.createPerson('Client').identifier();
    }
    static delivery() {
        return factoryPerson_1.FactoryPerson.createPerson('Delivery').identifier();
    }
    static owner() {
        return factoryPerson_1.FactoryPerson.createPerson('Owner').identifier();
    }
}
exports.UsageFactory = UsageFactory;
console.log(UsageFactory.client());
console.log(UsageFactory.client());
console.log(UsageFactory.owner());
