import {form1} from "@/views/AddPersonInfo/forms/form1";
import {FormRules} from "element-plus";
export const forms:InfoForm[] =[form1]
export function getFormRules(form:InfoForm):FormRules{
    for(let category in Object.keys(form))
    {
        console.log(category)
    }
    return {}
}