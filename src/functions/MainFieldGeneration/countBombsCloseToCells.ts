import {MainFieldType} from "../../types/commonTypes";

type countBombsCloseToCellsType = (
    MainField: MainFieldType,

) => void

export const countBombsCloseToCells:countBombsCloseToCellsType = (MainFieldLocal) => {
    MainFieldLocal.forEach((m1, ind1, Arr1)=>{
        m1.forEach((m2, ind2, Arr2)=>{
            if (m2.isBomb) {return} // пропускаем расчет количество бомб рядом, если в самой ячейке бомба
            for (let y = -1; y<=1; y++) {// каждую ячейку пробегаем по кругу
                for (let x = -1; x<=1; x++) { //на +/-1  чтобы посчитать количество бомб рядом
                    if (Arr1[ind1+y] && Arr1[ind1+y][ind2+x]) {// если существует смещенный ряд и ячейка в пределах поля
                        if (Arr1[ind1+y][ind2+x].isBomb) { //и если эта смещенная ячейка содежит бомбу
                            m2.bombsClose++ // увеличиваем счетчик бомб у ячейки, которую обходим вокруг
                           // console.log("id:", m2.id, "| Бомба на  y:",y,", x", x,"| bombsClose:", m2.bombsClose)
                        }
                    }
                }
            }
        })
    })
    console.log(MainFieldLocal)

}





/*
            if (Arr1[ind1-1] && Arr1[ind1-1][ind2-1]) {
                if (Arr1[ind1-1][ind2-1].isBomb) {
                    m2.bombsClose++
                    console.log("id:", m2.id, "| Бомба на  y-1, x-1 | bombsClose:", m2.bombsClose)
                }
            }
            if (Arr1[ind1-1] && Arr1[ind1-1][ind2]) {
                if (Arr1[ind1-1][ind2].isBomb) {
                    m2.bombsClose++
                    console.log("id:", m2.id, "| Бомба на y-1, x | bombsClose:", m2.bombsClose)
                }
            }
            if (Arr1[ind1-1] && Arr1[ind1-1][ind2+1]) {
                if (Arr1[ind1-1][ind2+1].isBomb) {
                    m2.bombsClose++
                    console.log("id:", m2.id, "| Бомба на y-1, x+1 | bombsClose:", m2.bombsClose)
                }
            }

            if (Arr1[ind1] && Arr1[ind1][ind2-1]) {
                if (Arr1[ind1][ind2-1].isBomb) {
                    m2.bombsClose++
                    console.log("id:", m2.id, "| Бомба на y, x-1 | bombsClose:", m2.bombsClose)
                }
            }
            if (Arr1[ind1] && Arr1[ind1][ind2+1]) {
                if (Arr1[ind1][ind2+1].isBomb) {
                    m2.bombsClose++
                    console.log("id:", m2.id,  "| Бомба на y, x+1 | bombsClose:", m2.bombsClose)
                }
            }
            if (Arr1[ind1+1] && Arr1[ind1+1][ind2-1]) {
                if (Arr1[ind1+1][ind2-1].isBomb) {
                    m2.bombsClose++
                    console.log("id:", m2.id,  "| Бомба на y+1, x-1 | bombsClose:", m2.bombsClose)
                }
            }
            if (Arr1[ind1+1] && Arr1[ind1+1][ind2]) {
                if (Arr1[ind1+1][ind2].isBomb) {
                    m2.bombsClose++
                    console.log("id:", m2.id,  "| Бомба на y+1, x-1 | bombsClose:", m2.bombsClose)
                }
            }
            if (Arr1[ind1+1] && Arr1[ind1+1][ind2+1]) {
                if (Arr1[ind1+1][ind2+1].isBomb) {
                    m2.bombsClose++
                    console.log("id:", m2.id,  "| Бомба на y+1, x-1 | bombsClose:", m2.bombsClose)
                }
            }
*/
