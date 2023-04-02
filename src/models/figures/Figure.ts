import logo from "../../assets/horseB.png"
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import {King} from "./King";

export enum FigureNames {
    FIGURE,
    Knight = "Конь",
    QUEEN = "Королева",
    KING = "Король",
    BISHOP = "Слон",
    PAWN = "Пешка",
    ROOK = "Ладья"
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
        this.logo = null;
    }

    canMove(target: Cell) : boolean {
        if(target.figure?.color === this.color){
            return false;
        }
        if(target.figure?.name === FigureNames.KING){
            return false;
        }
        return true;
    }

    moveFigure(target: Cell){}
}