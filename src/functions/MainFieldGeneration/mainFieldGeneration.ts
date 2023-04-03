import {MainFieldType} from "../../types/commonTypes";
import {countBombsCloseToCells} from "./countBombsCloseToCells";

type mainFieldGenerationType = (
    setMainField: ( MainField: MainFieldType) => void,
    fieldLength: number,
    fieldHeight: number,
    MainField: MainFieldType
) => void

export const mainFieldGeneration:mainFieldGenerationType = (
    setMainField, fieldLength, fieldHeight, MainField) => {
    const MainFieldLocal: MainFieldType= [];
    let bombsCount
    for (let i = 0; i< fieldHeight; i++) {
        const ArrayX = []// временный массив по оси x (горизонталь)
        for (let j = 0; j< fieldLength; j++) {
            ArrayX.push({
                id: i + "" + j, // id из строк и колонок
                isBomb: Math.random() < 0.05, // это бомба с заданной вероятностью
                bombsClose: 0, // количество бомб рядом
                isShowed: false,
                setFlag: false
            })

        }
        MainFieldLocal.push(ArrayX)
    }
    countBombsCloseToCells(MainFieldLocal, setMainField)
}