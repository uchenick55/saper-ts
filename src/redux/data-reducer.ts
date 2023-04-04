import {MainFieldType} from "../types/commonTypes";
import {checkZerroCells} from "../functions/checkZerroCells";

const SET_MAINfIELD  = "sbrrt/dataReducer/SET_MAINfIELD "; //константа задания MainField

export type setMainFieldType  = { type: typeof SET_MAINfIELD, MainField: MainFieldType}
export const setMainField = ( MainField: MainFieldType): setMainFieldType => { // экшн задания сгенерированного поля боя
    return {type: SET_MAINfIELD, MainField}
};

const SHOULD_ZERRO_CELLS_UPDATE  = "sbrrt/dataReducer/SHOULD_ZERRO_CELLS_UPDATE "; //

export type zerroCellsUpdateType  = { type: typeof SHOULD_ZERRO_CELLS_UPDATE, ShouldZerroCellsUpdate: boolean}
export const zerroCellsUpdate = ( ShouldZerroCellsUpdate: boolean): zerroCellsUpdateType => { //
    return {type: SHOULD_ZERRO_CELLS_UPDATE, ShouldZerroCellsUpdate}
};
const SET_BOMB_FLAGS_QTY  = "sbrrt/dataReducer/SET_BOMB_FLAGS_QTY "; //задать сколько флагов над бомбами уже установлено

export type setBombFlagsQtyType  = { type: typeof SET_BOMB_FLAGS_QTY, bombFlagsQty: number}
export const setBombFlagsQty = (bombFlagsQty: number): setBombFlagsQtyType => { //
    return {type: SET_BOMB_FLAGS_QTY, bombFlagsQty}
};

type ActionTypes = setMainFieldType | zerroCellsUpdateType | setBombFlagsQtyType

type initialStateType = {
    MainField: MainFieldType, //главное игровое поле
    fieldLength: number, //длина игрового поля
    fieldHeight: number, //высота игрового поля
    ShouldZerroCellsUpdate: boolean,// флаг следует ли пройти еще один цикл открывания пустых ячеек (bombsClose ===0)
    bombsQty: number // сколько бомб установлено на поле
    bombFlagsQty: number // сколько бомб отмечено флагами

}
const initialState: initialStateType = { //стейт по умолчанию
    fieldLength: 10,
    fieldHeight: 10,
    bombsQty: 12,
    bombFlagsQty: 0,
    ShouldZerroCellsUpdate: false,
    MainField: []
}

const dataReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {//редьюсер
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_MAINfIELD:  // кейс задания ошибок формы
            stateCopy = {
                ...state, // копия всего стейта
                MainField: action.MainField
            }
            return stateCopy; // возврат копии стейта после изменения
        case SHOULD_ZERRO_CELLS_UPDATE:  //
            stateCopy = {
                ...state, // копия всего стейта
                ShouldZerroCellsUpdate: action.ShouldZerroCellsUpdate
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_BOMB_FLAGS_QTY:  // задать количество установленных флагов расположения бомб
            stateCopy = {
                ...state, // копия всего стейта
                bombFlagsQty: action.bombFlagsQty
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default dataReducer;
