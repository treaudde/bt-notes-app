export class Note {
    constructor(
        public id : Number = 0,
        public note_title : string = '',
        public note_text : string = ''
    ) {

    }

    toJson(){
        return JSON.stringify(this)
    }
}
