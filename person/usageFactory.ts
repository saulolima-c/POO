import { FactoryPerson } from "./factoryPerson";


export class UsageFactory {

    public static client(){
        return FactoryPerson.createPerson('Client').identifier()
    }

    public static delivery(){
        return FactoryPerson.createPerson('Delivery').identifier()
    }
    
    public static owner(){
        return FactoryPerson.createPerson('Owner').identifier()
    }
}

console.log(UsageFactory.client());
console.log(UsageFactory.client());
console.log(UsageFactory.owner());
