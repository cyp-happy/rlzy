<template>
    <el-form class="px-10 py-4 " v-model="form"   label-position="top" >
        <el-form-item class="shadow-xl  hover:ring-2 hover:shadow-gray-200 shadow-gray-100 rounded p-6 my-4 "    v-for="category in Object.keys(form)" :label="category">
            <el-row  v-for="(rowItem,rowIndex) in form[category]" class="mb-6  " style="width: 100%;" :gutter="20" >
                <el-col   v-for="(field,colIndex) in rowItem" :span="distributeIntegers(24,rowItem.length)[colIndex]">
                    <el-form-item :rules="field.rules" :prop="`${category}[${rowIndex}][${colIndex}].label`" class=""  :label="field.label" :required="field.required">
                        <el-input class="w-full" :clearable="(<TextField>field).clearable"  v-if="field.hasOwnProperty('clearable')" v-model="field.value" :placeholder="field.placeholder"></el-input>
                        <el-select clearable :placeholder="field.placeholder" class="w-full" v-if="field.hasOwnProperty('options')" v-model="field.value">
                            <el-option v-for="item in (<SingleOptionField<string>>field).options" :key="item" :value="item"></el-option>
                        </el-select>
                        <el-date-picker style="width: 100%" v-if="field.hasOwnProperty('isDateExact')"
                                        v-model="field.value"
                                        :type="(<DateField>field).isDateExact?'day':'month'"
                                        :placeholder="field.placeholder"
                        />
                        <el-radio-group  v-if="field.hasOwnProperty('singleRadioLabels')" v-model="field.value" >
                            <el-radio-button v-for="label in (<SingleRadioField<string>>field).singleRadioLabels" :label="label" />
                        </el-radio-group>
                        <el-select v-if="field.hasOwnProperty('multiOptionsLabels')"
                            v-model="field.value"
                            multiple
                            collapse-tags
                            collapse-tags-tooltip
                            :placeholder="field.placeholder"
                            style="width: 100%"
                        >
                            <el-option
                                v-for="item in (<MultiOptionsField<string>>field).multiOptionsLabels"
                                :key="item"
                                :label="item"
                                :value="item"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form-item>
<!--        <el-form-item label="Activity zone">-->
<!--            <el-select v-model="form.region" placeholder="please select your zone">-->
<!--                <el-option label="Zone one" value="shanghai" />-->
<!--                <el-option label="Zone two" value="beijing" />-->
<!--            </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Activity time">-->
<!--            <el-col :span="11">-->
<!--                <el-date-picker-->
<!--                        v-model="form.date1"-->
<!--                        type="date"-->
<!--                        placeholder="Pick a date"-->
<!--                        style="width: 100%"-->
<!--                />-->
<!--            </el-col>-->
<!--            <el-col :span="2" class="text-center">-->
<!--                <span class="text-gray-500">-</span>-->
<!--            </el-col>-->
<!--            <el-col :span="11">-->
<!--                <el-time-picker-->
<!--                        v-model="form.date2"-->
<!--                        placeholder="Pick a time"-->
<!--                        style="width: 100%"-->
<!--                />-->
<!--            </el-col>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Instant delivery">-->
<!--            <el-switch v-model="form.delivery" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Activity type">-->
<!--            <el-checkbox-group v-model="form.type">-->
<!--                <el-checkbox label="Online activities" name="type" />-->
<!--                <el-checkbox label="Promotion activities" name="type" />-->
<!--                <el-checkbox label="Offline activities" name="type" />-->
<!--                <el-checkbox label="Simple brand exposure" name="type" />-->
<!--            </el-checkbox-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Resources">-->
<!--            <el-radio-group v-model="form.resource">-->
<!--                <el-radio label="Sponsor" />-->
<!--                <el-radio label="Venue" />-->
<!--            </el-radio-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Activity form">-->
<!--            <el-input v-model="form.desc" type="textarea" />-->
<!--        </el-form-item>-->
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import {forms, getFormRules} from "@/views/AddPersonInfo/forms/initForm";
import {distributeIntegers} from "@/views/AddPersonInfo/utils/tools";
const form=reactive(forms[0])
// const formRules=reactive<FormRules>()
getFormRules(forms[0])
// do not use same name with ref


const onSubmit = () => {
    console.log('submit!')
}
</script>
