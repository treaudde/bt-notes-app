export class Note {
    public id : Number;
    public note_title : string;
    public note_text : string;

    constructor(id: Number, title : string, text : string) {
        this.note_title = title;
        this.note_text = text;
        this.id = id;
    }
}
