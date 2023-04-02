import {MainFieldType} from "../types/commonTypes";

const SET_AAA  = "sbrrt/dataReducer/SET_AAA "; //константа задания

export type setAaaFieldType  = { type: typeof SET_AAA}
export const setMainField = (): setAaaFieldType => { // экшн задания сгенерированного поля боя
    return {type: SET_AAA}
};

type ActionTypes = setAaaFieldType

type initialStateType = {
    fieldLength: number,
    MainField: MainFieldType,
}
const initialState: initialStateType = { //стейт по умолчанию
    fieldLength: 9,
    MainField: [[{
        id: "11",
        isBomb: true, // это бомба?
        bombsClose: 1, // количество бомб рядом
    }]]
}

const dataReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {//редьюсер
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_AAA:  // кейс задания ошибок формы
            stateCopy = {
                ...state, // копия всего стейта
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default dataReducer;
