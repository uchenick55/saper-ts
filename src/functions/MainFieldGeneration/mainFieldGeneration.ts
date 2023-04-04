import {MainFieldType} from "../../types/commonTypes";
import {countBombsCloseToCells} from "./countBombsCloseToCells";
import {setBombs} from "./setBombs";

type mainFieldGenerationType = (
    setMainField: ( MainField: MainFieldType) => void,
    fieldLength: number,
    fieldHeight: number,
    MainField: MainFieldType,
    bombsQty: number,
) => void

export const mainFieldGeneration:mainFieldGenerationType = (
    setMainField, fieldLength, fieldHeight, MainField, bombsQty) => {
    const MainFieldLocal: MainFieldType= [];
    let bombsCount
    for (let i = 0; i< fieldHeight; i++) {
        const ArrayX = []// временный массив по оси x (горизонталь)
        for (let j = 0; j< fieldLength; j++) {
            ArrayX.push({
                id: i + "" + j, // id из строк и колонок
                isBomb: false, // Math.random() < 0.1, // это бомба с заданной вероятностью
                bombsClose: 0, // количество бомб рядом
                isShowed: false, // ячейка не открыта по умолчанию
                isBombFlag: false // флаг "здесь бомба" не установлен
            })

        }
        MainFieldLocal.push(ArrayX)
    }
    setBombs(MainFieldLocal, bombsQty, fieldLength, fieldHeight) // задать бомбы
    countBombsCloseToCells(MainFieldLocal) // расставить количество бомб рядом по ячейкам

    setMainField(MainFieldLocal) // задать сгенерированное поле в стор

}