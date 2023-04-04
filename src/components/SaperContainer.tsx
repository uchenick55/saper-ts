import React, {useEffect, useState} from "react";
// @ts-ignore
import {mainFieldGeneration} from '../functions/MainFieldGeneration/mainFieldGeneration';
import {connect} from "react-redux";
import {GlobalStateType} from "../redux/store-redux";
import {MainFieldType} from "../types/commonTypes";
import Saper from "./Saper";
import {setMainField, zerroCellsUpdate} from "../redux/data-reducer";
import {checkZerroCells} from "../functions/checkZerroCells";

type SaperContainerType = {
    MainField: MainFieldType,
    fieldLength: number,
    fieldHeight: number,
    ShouldZerroCellsUpdate: boolean,
    bombsQty: number,
    setMainField: (MainField: MainFieldType) => void,
    zerroCellsUpdate: ( ShouldZerroCellsUpdate: boolean)=> void


}
const SaperContainer: React.FC<SaperContainerType> = (
    {MainField, fieldLength, fieldHeight, setMainField,
        ShouldZerroCellsUpdate, zerroCellsUpdate, bombsQty}) => {

    useEffect( () => { // генерация главного поля при первой загрузке приложения
         mainFieldGeneration(setMainField, fieldLength, fieldHeight, MainField, bombsQty)
    }, [] )

    useEffect( () => { // генерация главного поля при первой загрузке приложения
            if (ShouldZerroCellsUpdate) { // если нужно обновить
                zerroCellsUpdate(false) // зануляем необходимость обновления
                const MainFieldLocal: MainFieldType = JSON.parse( JSON.stringify( MainField ) ) // полная копия массива ships
                checkZerroCells( MainFieldLocal, zerroCellsUpdate ) // проверяем какие ячейки имеют bombsClose 0
                setMainField( MainFieldLocal ) // задаем изменения в стейт
            }
        }, [MainField]
    )

    return <div>
        <Saper
            MainField={MainField} setMainField={setMainField} zerroCellsUpdate={zerroCellsUpdate}
        />
    </div>
}
type mapStateToPropsType = {
    MainField: MainFieldType,
    fieldLength: number,
    fieldHeight: number,
    ShouldZerroCellsUpdate: boolean,
    bombsQty: number,
}
const mapStateToProps = (state: GlobalStateType) => {
    return {
        MainField: state.mainData.MainField,
        fieldLength: state.mainData.fieldLength,
        fieldHeight: state.mainData.fieldHeight,
        ShouldZerroCellsUpdate: state.mainData.ShouldZerroCellsUpdate,
        bombsQty: state.mainData.bombsQty
    }
}
type mapDispatchToPropsType = {
    setMainField: (MainField: MainFieldType) => void,
    zerroCellsUpdate: ( ShouldZerroCellsUpdate: boolean)=> void
}
export default connect<mapStateToPropsType, // тип mapStateToProps
    mapDispatchToPropsType, // тип mapDispatchToProps
    unknown, // тип входящих пропсов от родителя
    GlobalStateType // глобальный стейт из стора
    >( mapStateToProps, {
    setMainField, zerroCellsUpdate
} )( SaperContainer )

