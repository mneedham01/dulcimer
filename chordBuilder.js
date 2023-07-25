import { move } from "./halfStepConverter"

//build a major chord 
export function major (note){

    let list = []

    const third = move(note, 4)
    list.push(third)

    const fifth = move(note, 7)
    list.push(fifth)

    return list
}

export function minor (note) {

    let list

    const third = move(note, 3)
    list.push(third)

    const fifth = move (note, 7)
    list.push(fifth)

    return list
}