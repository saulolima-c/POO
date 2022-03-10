export class DeliveryPerson implements personTDO {
    public name: string;

    constructor() {
        this.name = ''
    }

    identifier(): string {
        return ("Here is Delivery Person")
    }
}