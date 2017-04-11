export class Task {
    title: string;
    isCompleted: boolean;
    _id: string;
    listId: string;
    
    constructor(taskObject: any = {}) {        
        [    
            this.title, this.isCompleted,
            this._id, this.listId
        ] = [
            taskObject.title || "", taskObject.isCompleted || false,
            taskObject._id || "", taskObject.listId || ""
        ];
    }
}