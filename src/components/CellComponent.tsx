import {Cell} from "../models/Cell";
import {FC} from "react";

interface CellProp {
    cell: Cell,
    selected: boolean,
    click: (cell: Cell) => void,
}


export const CellComponent: FC<CellProp> = ({cell, selected, click}) => {
    return (
        <div
            className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
            onClick={() => click(cell)}
            style={{background: cell.available && cell.figure ? "green" : ""}}
        >
            {cell.available && !cell.figure && <div className={"available"}></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    )
}