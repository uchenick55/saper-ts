import {MainFieldType} from "../types/commonTypes";

const SET_MAINfIELD  = "sbrrt/dataReducer/SET_MAINfIELD "; //константа задания MainField

export type setMainFieldType  = { type: typeof SET_MAINfIELD, MainField: MainFieldType}
export const setMainField = ( MainField: MainFieldType): setMainFieldType => { // экшн задания сгенерированного поля боя
    return {type: SET_MAINfIELD, MainField}
};

type ActionTypes = setMainFieldType

type initialStateType = {
    MainField: MainFieldType,
    fieldLength: number,
    fieldHeight: number,
}
const initialState: initialStateType = { //стейт по умолчанию
    fieldLength: 5,
    fieldHeight: 4,
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
        case SET_MAINfIELD:  // кейс задания ошибок формы
            stateCopy = {
                ...state, // копия всего стейта
                MainField: action.MainField
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default dataReducer;
