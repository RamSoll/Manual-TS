
const skill: string[]= ["bash","counter","Healing"]

interface Charater {
    name: string,
    hp: number,
    skill: string[],
    homeTown?: string
}

const strider: Charater= {
    name:"strider",
    hp: 100,
    skill,
}

strider.homeTown = "puerto"
console.table(strider)
console.log(strider.skill)
export {}