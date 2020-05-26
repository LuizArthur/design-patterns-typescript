import { AbstractFactory } from "../abstract/abstractFactory";
import { ShapeInterface } from "../interface/shape/shapeInterface";
import { RoundedRectangle } from "../shape/rounded/roundedRectangle";
import { RoundedSquare } from "../shape/rounded/roundedSquare";

export class RoundedShapeFactory extends AbstractFactory {
  getShape(shapeType: string): ShapeInterface | null {
    if(shapeType.toLowerCase() == "roundedrectangle") {
      return new RoundedRectangle();
    }

    if(shapeType.toLowerCase() == "roundedsquare") {
      return new RoundedSquare();
    }

    return null;
  }
  
}