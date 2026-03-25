

export const printObject = (argument : any):void => {
    console.log(argument)
}


export function genericFunction<T>(argumnet: T):any{
    return argumnet
}

export const genericFunctionArrow = <T>(argument: T) => {
    return argument
}

