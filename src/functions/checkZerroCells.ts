import {MainFieldType} from "../types/commonTypes";

type checkZerroCellsType = (
    MainField: MainFieldType,
    zerroCellsUpdate: ( ShouldZerroCellsUpdate: boolean)=> void
)
    => void

export const checkZerroCells: checkZerroCellsType = (MainFieldLocal, zerroCellsUpdate) => {
    console.log("заход checkZerroCells")

    MainFieldLocal.map( (m1, ind1, Arr1) => {
        m1.map( (m2, ind2, Arr2) => {
            if (m2.isShowed && m2.bombsClose===0 && !m2.isBomb) {// если основная ячейка показана, с ней рядом нет бомб и это не бомба

                for (let y = -1; y<=1; y++) {// каждую ячейку пробегаем по кругу
                    for (let x = -1; x<=1; x++) { //
                        if (Arr1[ind1+y] && Arr1[ind1+y][ind2+x]) {
                            const cell = Arr1[ind1+y][ind2+x] //
                            if (!cell.isShowed && !cell.isBomb && !cell.isBombFlag) { // если проверяемая (смещенная) ячейкаеще не показана, не содержит бомбы и на ней нет флага
                                cell.isShowed=true // меняем ее статус isShowed=true (при следующем проходе она попадет под этот же цикл как основная ячейка)
                                zerroCellsUpdate(true) // поскольку изменения были, нужно прогнать в  useEffect через checkZerroCells (пустые ячейки рядом)
                            }
                        }
                    }
                }
            }
        })
    })
}













/*
                if (Arr1[ind1-1] && Arr1[ind1-1][ind2-1]) {
                    const cell = Arr1[ind1-1][ind2-1] // проверяемая (смещенная) ячейка
                    if (!cell.isShowed && !cell.isBomb && !cell.isBombFlag) {
                        cell.isShowed=true
                        console.log("id:", cell.id, "| bombsClose===0 на  y-1, x-1")
                        zerroCellsUpdate(true)
                    }
                }
                if (Arr1[ind1-1] && Arr1[ind1-1][ind2]) {
                    const cell = Arr1[ind1-1][ind2] // проверяемая (смещенная) ячейка
                    if (!cell.isShowed && !cell.isBomb && !cell.isBombFlag) {
                        cell.isShowed=true
                        console.log("id:", cell.id, "| bombsClose===0 на  y-1, x")
                        zerroCellsUpdate(true)
                    }
                }
                if (Arr1[ind1-1] && Arr1[ind1-1][ind2+1]) {
                    const cell = Arr1[ind1-1][ind2+1] // проверяемая (смещенная) ячейка
                    if (!cell.isShowed && !cell.isBomb && !cell.isBombFlag) {
                        cell.isShowed=true
                        console.log("id:", cell.id, "| bombsClose===0 на  y-1, x+1")
                        zerroCellsUpdate(true)
                    }
                }
                if (Arr1[ind1] && Arr1[ind1][ind2-1]) {
                    const cell = Arr1[ind1][ind2-1] // проверяемая (смещенная) ячейка
                    if (!cell.isShowed && !cell.isBomb && !cell.isBombFlag) {
                        cell.isShowed=true
                        console.log("id:", cell.id, "| bombsClose===0 на  y, x-1")
                        zerroCellsUpdate(true)
                    }
                }
                if (Arr1[ind1] && Arr1[ind1][ind2+1]) {
                    const cell = Arr1[ind1][ind2+1] // проверяемая (смещенная) ячейка
                    if (!cell.isShowed && !cell.isBomb && !cell.isBombFlag) {
                        cell.isShowed=true
                        console.log("id:", cell.id, "| bombsClose===0 на  y, x+1")
                        zerroCellsUpdate(true)
                    }
                }
                if (Arr1[ind1+1] && Arr1[ind1+1][ind2-1]) {
                    const cell = Arr1[ind1+1][ind2-1] // проверяемая (смещенная) ячейка
                    if (!cell.isShowed && !cell.isBomb && !cell.isBombFlag) {
                        cell.isShowed=true
                        console.log("id:", cell.id, "| bombsClose===0 на  y+1, x-1")
                        zerroCellsUpdate(true)
                    }
                }
                if (Arr1[ind1+1] && Arr1[ind1+1][ind2]) {
                    const cell = Arr1[ind1+1][ind2] // проверяемая (смещенная) ячейка
                    if (!cell.isShowed && !cell.isBomb && !cell.isBombFlag) {
                        cell.isShowed=true
                        console.log("id:", cell.id, "| bombsClose===0 на  y+1, x")
                        zerroCellsUpdate(true)
                    }
                }
                if (Arr1[ind1+1] && Arr1[ind1+1][ind2+1]) {
                    const cell = Arr1[ind1+1][ind2+1] // проверяемая (смещенная) ячейка
                    if (!cell.isShowed && !cell.isBomb && !cell.isBombFlag) {
                        cell.isShowed=true
                        console.log("id:", cell.id, "| bombsClose===0 на  y+1, x+1")
                        zerroCellsUpdate(true)
                    }
                }
*/
