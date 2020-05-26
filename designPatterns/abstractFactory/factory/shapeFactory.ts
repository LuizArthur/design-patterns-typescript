import { AbstractFactory } from "../abstract/abstractFactory";
import { ShapeInterface } from "../interface/shape/shapeInterface";
import { Rectangle } from "../shape/regular/rectangle";
import { Square } from "../shape/regular/square";


export class ShapeFactory extends AbstractFactory {
  getShape(shapeType: string): ShapeInterface | null{
    if(shapeType.toLowerCase() == 'rectangle') {
      return new Rectangle();
    }

    if(shapeType.toLowerCase() == 'square') {
      return new Square();
    }

    return null;
  }
  
  
}