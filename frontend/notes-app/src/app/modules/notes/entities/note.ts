export class Note {
    public id : Number;
    public noteTitle : string;
    public noteText : string;

    constructor(id: Number, title : string, text : string) {
        this.noteTitle = title;
        this.noteText = text;
        this.id = id;
    }
}
