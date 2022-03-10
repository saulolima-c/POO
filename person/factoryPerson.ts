import { DeliveryPerson } from "./deliveryPerson"
import { ownerPerson } from "./ownerPerson"
import { clientPerson } from "./clientPerson"


// Desing Pattern Factory

// Single Responsability
export class FactoryPerson {

    // injeção de dependência
    public static createPerson(type:string): personTDO {
        if (type === 'Client') {
            return new clientPerson()
        } else

        if (type === 'Delivery') {
            return new DeliveryPerson()
        } else

        if (type === 'Owner') {
            return new ownerPerson()
        }

        return null as unknown as personTDO
    }
}

FactoryPerson.createPerson('Felipe')