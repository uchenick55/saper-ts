export type cellType = {
    id: string,
    isBomb: boolean, // это бомба?
    bombsClose: number, // количество бомб рядом
    isShowed: boolean, // отображаются ли данные ячейки на поле
    isBombFlag: boolean,
}

export type MainFieldType = Array<Array<cellType>>
