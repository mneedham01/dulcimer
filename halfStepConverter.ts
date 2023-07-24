
// building map 
export const map = new Map<string, number>([
    ["C", 1],
    ["C#", 2],
    ["D", 3],
    ["D#", 4], 
    ["E", 5],
    ["F", 6],
    ["F#", 7],
    ["G", 8], 
    ["G#", 9], 
    ["A", 10],
    ["A#", 11], 
    ["B", 12]
]);

function noteGetter(number : number) {
    for (let key of map.keys()){
        if (map[key] === number){
            return key
        }
    }
}

export function move (note: string, halfSteps : number) {

    // get the number value of the note 
    const num = map.get(note)

    // set up newNum 
    let newNum : number 

    if (num! + halfSteps > 12) {
        newNum = num! + halfSteps
    } else {
        //won't move more than an octave
        newNum = num! + halfSteps - 12 
    }

    return noteGetter(newNum)
}
