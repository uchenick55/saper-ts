import {MainFieldType} from "../../types/commonTypes";

type setBombsType = (
    MainField: MainFieldType,
    bombsQty: number,
    fieldLength: number,
    fieldHeight: number,
) => void
export const setBombs:setBombsType = (
    MainField,bombsQty, fieldLength, fieldHeight
) => {
    console.log("setBombs hello!")
    let iterationCount: number = 0; // предохранитель от бесконечного цикла
    let bombsSet: number = 0 // сколько бомб уже установлено
    while (bombsSet<bombsQty && iterationCount<100) {    //цикл пока не заданы все бомбы
        iterationCount++
        const coordX = Math.floor(Math.random()*fieldLength) // случайный генератор по оси x (fieldLength)
        const coordY = Math.floor(Math.random()*fieldHeight)// случайный генератор по оси y (fieldHeight)
        console.log(coordY)
        if (!MainField[coordY][coordX].isBomb) {// если бомба по указанным координатам еще не стоит
            MainField[coordY][coordX].isBomb=true// задать в MainField по сгенерированным координатам бомбу.
            bombsSet++ // увеличить счетчик установленых бомб
        }
    }




}