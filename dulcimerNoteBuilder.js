import { map, noteGetter, move}  from "./main.js"



export function findNotes(note){

    let list = []

    // W-W-H-W-W-H-W
    // list: [note, 2, 4, 5, 7, 9, 10, 11, 12, 14, 16, 17, 19, 21]
    list.push(note)
    for (i =0; i < 22; i++) {
        if (i != 3 && i != 6  && i != 6 && i != 8 && i != 13 && i != 18 && i != 20) {
            list.push(note, i);
        }
    }
}

console.log()