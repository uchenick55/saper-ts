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
            if (m2.isShowed && m2.bombsClose===0 && !m2.isBomb) {
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

            }
        })
    })

}