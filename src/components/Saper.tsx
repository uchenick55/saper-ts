import {MainFieldType} from "../types/commonTypes";
import classes from "./saper.module.css"
import React from "react";
import {checkZerroCells} from "../functions/checkZerroCells";

type SaperType = {
    MainField: MainFieldType,
    bombsQty: number,
    bombFlagsQty: number,
    setMainField: (MainField: MainFieldType) => void,
    zerroCellsUpdate: (ShouldZerroCellsUpdate: boolean) => void,
    setBombFlagsQty: (bombFlagsQty: number)=> void,

}
const Saper: React.FC<SaperType> = (
    {MainField, setMainField, zerroCellsUpdate, bombFlagsQty, bombsQty, setBombFlagsQty}
) => {

    const MainFieldLocal: MainFieldType = JSON.parse( JSON.stringify( MainField ) ) // полная копия массива ships

    const MainFieldRender = <div className={classes.mainFiled}> {/*основное игровое поле*/}
        {MainFieldLocal.map( (m1, ind1, Arr1) => {
            return <div key={ind1} className={classes.row}>
                {m1.map( (m2, ind2, Arr2) => {
                    return <div
                        key={m2.id}
                        className={classes.cell}
                        onClick={() => {
                            if (!m2.isBombFlag) { // если флаг не установлен
                                m2.isShowed = true // поставить метку что ячейка открыта
                                setMainField( MainFieldLocal ) // задать измененный стейт
                                zerroCellsUpdate( true ) // открыть все нулевые поля
                            }
                        }
                        }
                        onContextMenu={(e) => {
                            e.preventDefault()
                            if (!m2.isShowed) { // поставить флаг можно только на неоткрытую ячейку
                                m2.isBombFlag = !m2.isBombFlag // поставить флаг над местом предполагаемой бомбы
                                setBombFlagsQty(m2.isBombFlag
                                    ? bombFlagsQty+1
                                    : bombFlagsQty-1
                                )
                            }
                            setMainField( MainFieldLocal ) // задать измененный стейт

                        }}
                    >
                        <div> {/*отрисовка ячейки*/}
                            {m2.isBombFlag // если на ячейке стоит флаг с возможной бомбой
                                ? <img className={classes.isBombFlag} src={require( '../assets/png/flag.png' )} alt={"флажок над бомбой "}/> // отображаем флаг
                                : m2.isShowed // если ячейка была вскрыта ( isShowed)
                                    ? m2.isBomb // в ячейке бомба?
                                        ? <img className={classes.BOOM} src={require( '../assets/png/BOOM.png' )} alt={"BOOM"}/> // взрыв бомбы при нажатии на нее
                                        : m2.bombsClose === 0 // количество бомб рядом равно 0?
                                            ? null // если да, то ничего не отображаем
                                            : <div className={ // если количество бомб рядом больше нуля
                                                m2.bombsClose === 1 // цифра 1?
                                                    ? classes.blue // цвет цифры синий
                                                    : m2.bombsClose === 2 // цифра 2?
                                                    ? classes.green // цвет цифры зеленый
                                                    : m2.bombsClose === 3 // цифра 3?
                                                        ? classes.red // цвет цифры красный
                                                        : m2.bombsClose === 4 // цифра 4?
                                                            ? classes.navyBlue// цвет цифры Navy blue
                                                            : m2.bombsClose === 5 // цифра 5?
                                                                ? classes.maroon // цвет цифры Maroon
                                                                : "" // для других цифр цвет по умолчанию
                                            }
                                            >{m2.bombsClose}</div> // иначе количество бомб рядом
                                    : <img className={classes.EmptyCells} src={require( '../assets/png/cell.png' )}/> //пустые ячейки до нажатия
                            }

                        </div>
                    </div>
                } )}
            </div>
        } )}
    </div>
    return <div>
        <div>{bombsQty-bombFlagsQty}</div>
        {MainFieldRender}
    </div>
}
export default Saper