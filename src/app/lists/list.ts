export class List {
    title: string;
    description: string;
    _id: string;

    constructor(listObject: any = {}) {
        [
            this.title, this.description, this._id
        ] = [
            listObject.title || "", listObject.description || "", listObject._id || ""
        ];
    }
}