import {
    aircraftOptions,
    DateF,
    dutyOptions, isOrNotOptions,
    jobDutyOptions, MultiOptionsF,
    SingleOptionF, politicsStatus,
    rankOptions,
    sexOptions, SingleRadioF,
    TextF
} from "@/views/AddPersonInfo/utils/initFieldUtils";

export const form1={
    "基本信息":[
        [
            SingleOptionF("分区",["南部"]),
            SingleOptionF("单位类别",["军以上机"]),
            TextF("单位"),
            TextF("姓名"),
            SingleOptionF("性别",sexOptions),
        ],
        [
            TextF("部职别"),
            SingleOptionF("岗位职务层级",jobDutyOptions),
            SingleOptionF("军衔等级",rankOptions),
            DateF("军衔等级时间"),
            SingleOptionF("职务层级",dutyOptions)
        ],
        [
            DateF("职务层级时间"),
            SingleOptionF("政治面貌",politicsStatus),
            TextF("军官证号"),
            TextF("公民身份证号"),
            DateF("出生时间",true)
        ],
        [
            TextF("实时年龄"),
            TextF("年龄上限"),
            TextF("停飞年限"),
            SingleRadioF("是否特许",isOrNotOptions),
            TextF("特许年龄"),
            TextF("婚育状况")
        ]
    ],
    "现保持最高机型情况":[
        [
            MultiOptionsF("现飞机型",aircraftOptions),

        ]
    ]
}