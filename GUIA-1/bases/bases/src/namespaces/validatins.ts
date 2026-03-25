namespace Validation {
  export  const validationText = (text: string):boolean => {
        return text.length > 3 ? true : false
    }

   export const validationDate = (myDate : Date) : boolean => {
        return isNaN(myDate.valueOf()) ? false : true
    }

    console.log(Validation.validationText("ramm"))
}