
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
    // limiting to first octave (for now)
    let list = []

    // W-W-H-W-W-H-W
    // 0, 1, 2, 3, 4, 5, 6
    for (i = 0; i < 7; i++) {
        list.push(note, i)
    }
    // add 6.5 and 7
    list.push(note, 6.5)
    list.push(note, 7)

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
    if (parseInt(i) == 2){
        return 0
    } else {
        return parseInt(i) + 1
    }
}

function printTab(list){
    console.log("Available chord positions: ")
    // looping through the tab
    for (i in list){
        str = "\nBass: " + list[i][0]
        str += "\nMiddle: " + list[i][1]
        str +="\nTop: "+ list[i][2]
        console.log(str)
    }
    console.log("\n")
}

function main(string1, string2, string3){

    const list1 = dulcimerNotes(string1)
    const list2 = dulcimerNotes(string2)
    const list3 = dulcimerNotes(string3)


    //loop through all notes
    for (const [key] of map){

        const list = []

        // major chord
        const majorChord = major(key)

        //print out message
        console.log(key + " Major Chord: " + majorChord[0]+ ", " + majorChord[1]+ ", "+ majorChord[2]+".")

        // loop through major chord
        for (i in majorChord){

            note = majorChord[i]

            const nextNote = majorChord[nextIndex(i)]

            const nextNext = majorChord[nextIndex(nextIndex(i))]

            // allowed to do just tonic and fifth
            if (i==0){
                if (list1.includes(note)){
                    // if bass string contains tonic
                    let bassTab = list1.indexOf(note)
                    if (list2.contains(note)){
                        // if middle contains tonic
                        let middleTab = list2.indexOf(note)
                        if (list3.contains(note)){
                            // if top contains tonic
                            let topTab = list3.indexOf(note)
                            list.push(bassTab, middleTab, topTab)
                        }
                        if (list3.contains(nextNext)) {
                            // if top contains fifth
                            let topTab = list3.indexOf(nextNext)
                            list.push(bassTab, middleTab, topTab)
                        }
                    } if (list2.contains(nextNext)){
                        // if middle contains fifth
                        let middleTab = list2.indexOf(nextNext)
                        if (list3.contains(note)){
                            // if top contains tonic
                            let topTab = list3.indexOf(note)
                            list.push(bassTab, middleTab, topTab)
                        }
                        if (list3.contains(nextNext)) {
                            // if top contains fifth
                            let topTab = list3.indexOf(nextNext)
                            list.push(bassTab, middleTab, topTab)
                        }
                    }
                }
                if (list2.includes(note)){
                    // if bass string contains tonic
                    let bassTab = list1.indexOf(note)
                    if (list2.contains(note)){
                        // if middle contains tonic
                        let middleTab = list2.indexOf(note)
                        if (list3.contains(note)){
                            // if top contains tonic
                            let topTab = list3.indexOf(note)
                            list.push(bassTab, middleTab, topTab)
                        }
                        if (list3.contains(nextNext)) {
                            // if top contains fifth
                            let topTab = list3.indexOf(nextNext)
                            list.push(bassTab, middleTab, topTab)
                        }
                    } if (list2.contains(nextNext)){
                        // if middle contains fifth
                        let middleTab = list2.indexOf(nextNext)
                        if (list3.contains(note)){
                            // if top contains tonic
                            let topTab = list3.indexOf(note)
                            list.push(bassTab, middleTab, topTab)
                        }
                        if (list3.contains(nextNext)) {
                            // if top contains fifth
                            let topTab = list3.indexOf(nextNext)
                            list.push(bassTab, middleTab, topTab)
                        }
                    }
                }
                if (list3.includes(note)){

                }
            }
            // check whether note is available in bass string
            if (list1.includes(note)) {
                // if the bass string contains the note, then check if the middle string contains the next note
                let bassTab = list1.indexOf(note)
                if (list2.includes(nextNote)){
                    //if the middle string contains the next note, check if the top string contains the final note
                    let middleTab = list2.indexOf(nextNote)
                    if (list3.includes(nextNext)){
                        //if the top string contains the final note, set it as a tab triplet
                        let topTab = list3.indexOf(nextNext)
                        list.push([bassTab, middleTab, topTab])
                    }
                } else if (list2.includes(nextNext)){
                    // if the middle string contains the next next note, check if the top string contains next note
                    let middleTab = list2.indexOf(nextNext)
                    if (list3.includes(nextNote)){
                        //if the top string contains the final note, set it as a tab triplet
                        let topTab = list3.indexOf(nextNote)
                        list.push([bassTab, middleTab, topTab])
                    }
                }
            }
        }
        //check list for finger width

        printTab(list)
    }
}

main("D", "A", "D")


