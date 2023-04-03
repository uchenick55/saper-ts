import {MainFieldType} from "../types/commonTypes";
import classes from "./saper.module.css"
import React from "react";

type SaperType = {
    MainField: MainFieldType,
    setMainField: ( MainField: MainFieldType) => void
}
const Saper: React.FC<SaperType> = ({MainField, setMainField}) => {
    return <div className={classes.mainFiled}>
        {MainField.map((m1, ind1, Arr1)=> {
            return <div key={ind1} className={classes.row}  >
                {m1.map((m2, ind2, Arr2)=> {
                    return <div
                        key={m2.id} className={classes.cell}>
                        {m2.isShowed && m2.id}
                    </div>
                })}
            </div>
        })}
    </div>
}
export default Saper