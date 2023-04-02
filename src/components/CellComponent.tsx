import {Cell} from "../models/Cell";
import {FC} from "react";

interface CellProp {
    cell: Cell
}


export const CellComponent: FC<CellProp> = ({cell}) => {
    return (
        <div
            className={["cell", cell.color].join(" ")}
        >
            {/*{cell.figure}*/}
        </div>
    )
}