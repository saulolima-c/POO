export class ownerPerson implements personTDO {
    public name: string;

    constructor() {
        this.name = ''
    }

    identifier(): string {
        return ("Here is Owner Person")
    }
}