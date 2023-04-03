import React, {useEffect, useState} from "react";
// @ts-ignore
import {mainFieldGeneration} from '../functions/MainFieldGeneration/mainFieldGeneration';
import {connect} from "react-redux";
import {GlobalStateType} from "../redux/store-redux";
import {MainFieldType} from "../types/commonTypes";
import Saper from "./Saper";
import {setMainField} from "../redux/data-reducer";
import {checkZerroCells} from "../functions/checkZerroCells";

type SaperContainerType = {
    MainField: MainFieldType,
    fieldLength: number,
    fieldHeight: number,
    setMainField: (MainField: MainFieldType) => void

}
const SaperContainer: React.FC<SaperContainerType> = (
    {MainField, fieldLength, fieldHeight, setMainField}) => {

    useEffect( () => { // генерация главного поля при первой загрузке приложения
        // mainFieldGeneration(setMainField, fieldLength, fieldHeight, MainField)
    }, [] )

    useEffect( () => { // генерация главного поля при первой загрузке приложения
            const MainFieldLocal: MainFieldType = JSON.parse( JSON.stringify( MainField ) ) // полная копия массива ships
            checkZerroCells( MainFieldLocal )
            const Aaa = JSON.stringify( MainField ) === JSON.stringify( MainFieldLocal )
            if (!Aaa) {setMainField( MainFieldLocal )}
        }, [MainField]
    )

    return <div>
        <Saper
            MainField={MainField} setMainField={setMainField}
        />
    </div>
}
type mapStateToPropsType = {
    MainField: MainFieldType,
    fieldLength: number,
    fieldHeight: number,
}
const mapStateToProps = (state: GlobalStateType) => {
    return {
        MainField: state.mainData.MainField,
        fieldLength: state.mainData.fieldLength,
        fieldHeight: state.mainData.fieldHeight
    }
}
type mapDispatchToPropsType = {
    setMainField: (MainField: MainFieldType) => void
}
export default connect<mapStateToPropsType, // тип mapStateToProps
    mapDispatchToPropsType, // тип mapDispatchToProps
    unknown, // тип входящих пропсов от родителя
    GlobalStateType // глобальный стейт из стора
    >( mapStateToProps, {
    setMainField
} )( SaperContainer )

