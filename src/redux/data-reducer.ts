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
    fieldLength: 10,
    fieldHeight: 10,
    MainField: [
        [
            {
                "id": "00",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "01",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "02",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "03",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "04",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "05",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "06",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "07",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "08",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "09",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            }
        ],
        [
            {
                "id": "10",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "11",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "12",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "13",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "14",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "15",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "16",
                "isBomb": true,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "17",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "18",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "19",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            }
        ],
        [
            {
                "id": "20",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "21",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "22",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "23",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "24",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "25",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "26",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "27",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "28",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "29",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            }
        ],
        [
            {
                "id": "30",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "31",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "32",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "33",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "34",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "35",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "36",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "37",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "38",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "39",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            }
        ],
        [
            {
                "id": "40",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "41",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "42",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "43",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "44",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "45",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "46",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "47",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "48",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "49",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            }
        ],
        [
            {
                "id": "50",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "51",
                "isBomb": true,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "52",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "53",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "54",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "55",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "56",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "57",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "58",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "59",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            }
        ],
        [
            {
                "id": "60",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "61",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "62",
                "isBomb": false,
                "bombsClose": 1,
                "isShowed": false
            },
            {
                "id": "63",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "64",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "65",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "66",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "67",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "68",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "69",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            }
        ],
        [
            {
                "id": "70",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "71",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "72",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "73",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "74",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "75",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "76",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "77",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "78",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "79",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            }
        ],
        [
            {
                "id": "80",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "81",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "82",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "83",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "84",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "85",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "86",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "87",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "88",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "89",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            }
        ],
        [
            {
                "id": "90",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "91",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "92",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "93",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "94",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "95",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "96",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "97",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "98",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
            },
            {
                "id": "99",
                "isBomb": false,
                "bombsClose": 0,
                "isShowed": false
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
