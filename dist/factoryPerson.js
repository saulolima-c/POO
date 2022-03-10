"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryPerson = void 0;
const deliveryPerson_1 = require("./deliveryPerson");
const ownerPerson_1 = require("./ownerPerson");
const clientPerson_1 = require("./clientPerson");
// Desing Pattern Factory
// Single Responsability
class FactoryPerson {
    // injeção de dependência
    static createPerson(type) {
        if (type === 'Client') {
            return new clientPerson_1.clientPerson();
        }
        else if (type === 'Delivery') {
            return new deliveryPerson_1.DeliveryPerson();
        }
        else if (type === 'Owner') {
            return new ownerPerson_1.ownerPerson();
        }
        return null;
    }
}
exports.FactoryPerson = FactoryPerson;
FactoryPerson.createPerson('Felipe');
