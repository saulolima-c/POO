export class clientPerson implements personTDO {
    name: string

    constructor() {
        this.name = ''
    }

    identifier(): string {
        return ('Here is Client Person')
    }
}