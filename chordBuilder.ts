import { move } from "./halfStepConverter"

//build a major chord 
export function major (note: string){

    let list : string[] =[]

    const third = move(note, 4)
    list.push(third!)

    const fifth = move(note, 7)
    list.push(fifth!)

    return list
}