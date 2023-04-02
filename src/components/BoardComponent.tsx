import React from "react";
import {Board} from "../models/Board";
import {FC} from "react";
import {CellComponent} from "./CellComponent";

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void
}


export const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map((cell) =>
                        <CellComponent
                            key={cell.id}
                            cell={cell}/>
                    )}
                </React.Fragment>
            )}
        </div>
    )
}