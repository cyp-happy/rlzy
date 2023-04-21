function Field(label:string,placeholder='',required=true):BaseField{
    return{
        label,placeholder,required
    }
}
function SingleOptionF<T=string>(label:string, options:T[]):SingleOptionField<T>
{
    return {
        ...Field(label),options
    }
}
function DateF(label:string,isDateExact:boolean=false):DateField{
    return {
        ...Field(label),isDateExact
    }
}
function TextF(label:string,clearable=true):TextField{
    return {
        ...Field(label),clearable
    }
}
function MultiOptionsF<T=string>(label:string,multiOptionsLabels:T[]):MultiOptionsField<T>{
    return {
        ...Field(label),
        multiOptionsLabels

    }
}
function SingleRadioF<T>(label:string, singleRadioLabels:T[]):SingleRadioField<T>
{
    return {
        ...Field(label),
        singleRadioLabels
    }
}
export const sexOptions=["男","女"]
export const dutyOptions=["连级正职"]
export const rankOptions=["少尉"]
export const jobDutyOptions=["连级正职"]
export const politicsStatus=["党员","团员","群众"]
export const isOrNotOptions=["是","否"]
export const aircraftOptions=["轰-6K","轰油-6"]
export{SingleOptionF,DateF,TextF,MultiOptionsF,SingleRadioF}