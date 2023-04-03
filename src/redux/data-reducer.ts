import {MainFieldType} from "../types/commonTypes";

const SET_AAA  = "sbrrt/dataReducer/SET_AAA "; //константа задания

export type setAaaFieldType  = { type: typeof SET_AAA}
export const setMainField = (): setAaaFieldType => { // экшн задания сгенерированного поля боя
    return {type: SET_AAA}
};

type ActionTypes = setAaaFieldType

type initialStateType = {
    MainField: MainFieldType,
    fieldLength: number,
    fieldHeight: number,
}
const initialState: initialStateType = { //стейт по умолчанию
    fieldLength: 3,
    fieldHeight: 3,
    MainField: [
        [
            {
                "id": "00",
                "isBomb": false,
                "bombsClose": 0,
                isShowed: false
            },
            {
                "id": "01",
                "isBomb": true,
                "bombsClose": 0,
                isShowed: false
            },
            {
                "id": "02",
                "isBomb": true,
                "bombsClose": 0,
                isShowed: false
            }
        ],
        [
            {
                "id": "10",
                "isBomb": true,
                "bombsClose": 0,
                isShowed: false
            },
            {
                "id": "11",
                "isBomb": false,
                "bombsClose": 0,
                isShowed: false
            },
            {
                "id": "12",
                "isBomb": false,
                "bombsClose": 0,
                isShowed: false
            }
        ],
        [
            {
                "id": "20",
                "isBomb": false,
                "bombsClose": 0,
                isShowed: false
            },
            {
                "id": "21",
                "isBomb": true,
                "bombsClose": 0,
                isShowed: false
            },
            {
                "id": "22",
                "isBomb": false,
                "bombsClose": 0,
                isShowed: false
            }
        ]
    ]
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
