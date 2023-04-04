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

type ActionTypes = setMainFieldType | zerroCellsUpdateType

type initialStateType = {
    MainField: MainFieldType,
    fieldLength: number,
    fieldHeight: number,
    ShouldZerroCellsUpdate: boolean,
    bombsQty: number
}
const initialState: initialStateType = { //стейт по умолчанию
    fieldLength: 10,
    fieldHeight: 10,
    bombsQty: 12,
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
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default dataReducer;
