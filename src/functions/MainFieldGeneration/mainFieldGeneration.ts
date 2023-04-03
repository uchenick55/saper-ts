import {MainFieldType} from "../../types/commonTypes";
import {countBombsCloseToCells} from "./countBombsCloseToCells";

type mainFieldGenerationType = (
    MainField: MainFieldType,
    fieldLength: number,
    fieldHeight: number
) => void

export const mainFieldGeneration:mainFieldGenerationType = (
    MainField, fieldLength, fieldHeight) => {
    const MainFieldLocal: MainFieldType= [];
    let bombsCount
    for (let i = 0; i< fieldHeight; i++) {
        const ArrayX = []// временный массив по оси x (горизонталь)
        for (let j = 0; j< fieldLength; j++) {
            ArrayX.push({
                id: i + "" + j, // id из строк и колонок
                isBomb: Math.random() < 0.3, // это бомба с заданной вероятностью
                bombsClose: 0, // количество бомб рядом
            })

        }
        MainFieldLocal.push(ArrayX)
    }
    //console.log(MainFieldLocal)
    countBombsCloseToCells(MainField)
}