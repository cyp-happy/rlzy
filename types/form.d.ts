import {FormRules} from "element-plus";

export {}
declare global{
    interface BaseField{
        label:string,
        placeholder:string,
        required:boolean
        value?:any,
        rules?:FormItemRule
    }
    interface SingleOptionField<T> extends BaseField{
        options:T[],
        value?:T
    }
    interface DateField extends BaseField{
        value?:Date
        isDateExact:boolean
    }
    interface TextField extends BaseField{
        value?:string,
        clearable:boolean
    }
    interface SingleRadioField<T> extends  BaseField{
        value?:T,
        singleRadioLabels:T[]
    }
    interface MultiOptionsField<T> extends BaseField{
        value?:T[],
        multiOptionsLabels:T[]
    }
    type InfoCategory = BaseField[][]
    type InfoForm=Record<string, InfoCategory>
}
