
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

    if (num + halfSteps <= 12) {
        newNum = num + halfSteps
    } else {
        while(num + halfSteps -12 > 12 ){
            halfSteps = halfSteps -12 
        }   
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

    return list
}

//build a major chord 
function major (note){

    let list = [note]

    const third = move(note, 4)
    list.push(third)

    const fifth = move(note, 7)
    list.push(fifth)

    return list
}

// build a minor chord
function minor (note) {

    let list = [note]

    const third = move(note, 3)
    list.push(third)

    const fifth = move (note, 7)
    list.push(fifth)

    return list
}

function nextIndex(i) {
    if (i ==2){
        return 0 
    } else{
        return i + 1
    }
}

function main(string1, string2, string3){
    list1 = dulcimerNotes(string1)
    list2 = dulcimerNotes(string2)
    list3 = dulcimerNotes(string3)

    //loop through all notes
    for (const [key] of map){

        // major chord 
        const majorChord = major(key)

        // loop through major chord 
        for (i in majorChord){

            note = majorChord[i]

            // check whether note is available in bass string 
            if (list1.includes(note)) {
                // if the bass string contains the note, then check if the middle string contains the next note 

            }
        }
    }
}

main("D", "A", "A")


