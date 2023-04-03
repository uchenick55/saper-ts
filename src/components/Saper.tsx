import {MainFieldType} from "../types/commonTypes";
import classes from "./saper.module.css"
import React from "react";
import {checkZerroCells} from "../functions/checkZerroCells";

type SaperType = {
    MainField: MainFieldType,
    setMainField: (MainField: MainFieldType) => void,
    zerroCellsUpdate: (ShouldZerroCellsUpdate: boolean) => void,

}
const Saper: React.FC<SaperType> = (
    {MainField, setMainField, zerroCellsUpdate}
) => {

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
                            zerroCellsUpdate( true )
                        }
                        }
                        onContextMenu={(e) => {
                            e.preventDefault()
                            if (!m2.isShowed) {m2.setFlag = true}
                            console.log( "нажата правая кнопка мыши" )
                            setMainField( MainFieldLocal )

                        }}
                    >
                        <div>
                            {m2.isShowed // если флаг isShowed
                                ? m2.isBomb // в ячейке бомба?
                                    ? <img className={classes.BOOM} src={require( '../assets/png/BOOM.png' )}/>
                                    : <div>{m2.bombsClose}</div>
                                : null}{/*пустые ячейки до нажатия*/}
                        </div>
                    </div>
                } )}
            </div>
        } )}
    </div>
}
export default Saper