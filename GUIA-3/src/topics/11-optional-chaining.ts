
export interface Passanger{
    name: string
    children?: Passanger[]
}

const Passanger1: Passanger = {
    name: 'Sol',
    children: []
}

const Passanger2: Passanger = {
    name: 'Ram',
    children: [{name: 'Brian'}]
}

const printChildren = (passanger: Passanger):void => {
    const howManyChildren = passanger.children?.length || 0
    console.log(howManyChildren)
    passanger.children?.forEach(child => console.log(child.name))
}

printChildren(Passanger1)
printChildren(Passanger2)