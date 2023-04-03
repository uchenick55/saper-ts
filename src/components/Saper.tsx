import {MainFieldType} from "../types/commonTypes";
import classes from "./saper.module.css"
import React from "react";
import {checkZerroCells} from "../functions/checkZerroCells";

type SaperType = {
    MainField: MainFieldType,
    setMainField: (MainField: MainFieldType) => void,
    zerroCellsUpdate: ( ShouldZerroCellsUpdate: boolean)=> void,

}
const Saper: React.FC<SaperType> = (
    {MainField, setMainField, zerroCellsUpdate}
) => {

    /*    type cellOnClickLocalType = () => void
        const cellOnClickLocal:cellOnClickLocalType = () => { // локальный обработчик кликов по ячейкам

        }*/
    const MainFieldLocal: MainFieldType = JSON.parse( JSON.stringify( MainField ) ) // полная копия массива ships

    return <div className={classes.mainFiled}>
        {MainFieldLocal.map( (m1, ind1, Arr1) => {
            return <div key={ind1} className={classes.row}>
                {m1.map( (m2, ind2, Arr2) => {
                    return <div
                        key={m2.id}
                        className={classes.cell}
                        onClick={() => {
                            m2.isShowed = true
                            setMainField( MainFieldLocal )
                            zerroCellsUpdate(true)
                        }
                        }
                        onContextMenu={(e)=>{
                            e.preventDefault()
                            console.log("нажата правая кнопка мыши")
                        }}
                    >
                        <div className={classes.class1}>
                            {m2.isShowed ? m2.isBomb ? "b" : m2.bombsClose : ""}
                         {/*   {m2.isShowed ? m2.isBomb ? "b" : m2.id : ""}*/}

                        </div>
                    </div>
                } )}
            </div>
        } )}
    </div>
}
export default Saper