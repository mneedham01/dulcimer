
// building map 
export const map = new Map(); 

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

export function noteGetter(number) {
    for (const [key, value] of map){
        if (value == number) {
            return key
        }
    }
}

export function move (note, halfSteps) {

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