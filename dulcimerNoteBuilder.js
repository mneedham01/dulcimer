import { move }  from "./halfStepConverter"



export function findNotes(note){

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