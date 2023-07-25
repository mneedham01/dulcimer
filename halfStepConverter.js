export {map, noteGetter, move, dulcimerNotes}

// building map 
const map = new Map(); 

map.set("C", 1);
map.set("C#", 2);
map.set("C#", 2);
map.set("D", 3);
map.set("D#", 4);
map.set("E", 5);
map.set("F", 6);
map.set("F#", 7);
map.set("G", 8);
map.set("G#", 9);
map.set("A", 10);
map.set("A#", 11);
map.set("B", 12);

function noteGetter(number) {
    for (const [key, value] of map){
        if (value == number) {
            return key
        }
    }
}

function move (note, halfSteps) {

    // get the number value of the note 
    const num = map.get(note)

    // set up newNum 
    let newNum 

    if (num + halfSteps < 12) {
        newNum = num + halfSteps
    } else {
        //won't move more than an octave
        newNum = num + halfSteps - 12 
    }

    return noteGetter(newNum)
}

function dulcimerNotes(note){

    let list = []

    // W-W-H-W-W-H-W
    // tonic (0)
    list.push(note)
    // W (1)
    list.push(move(note,2))
    //W (2)
    list.push(move(note,4))
    //H (3)
    list.push(move(note,5))
    //W (4)
    list.push(move(note,7))
    //W (5)
    list.push(move(note,9))
    //W (6)
    list.push(move(note,10))
    //(6.5)
    list.push(move(note,11))
    // W (7)
    list.push(move(note,12))
    // W (8)
    list.push(move(note,14))
    // W (9)
    list.push(move(note,16))
    // H (10)
    list.push(move(note,17))
    // W (11)
    list.push(move(note,19))
    // W (12)
    list.push(move(note,21))
}

