import {MainFieldType} from "../types/commonTypes";

type mainFieldGenerationType = (
    MainField: MainFieldType
) => void

export const mainFieldGeneration:mainFieldGenerationType = (MainField) => {
    console.log(MainField)
}