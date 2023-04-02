export type cellType = {
    id: string,
    isBomb: boolean, // это бомба?
    bombsClose: number, // количество бомб рядом
}

export type MainFieldType = Array<Array<cellType>>
