import { ShapeInterface } from './shape/shapeInterface';
import { Circle } from './shape/circle';
import { Rectangle } from './shape/rectangle';
import { Square } from './shape/square';

export class ShapeFactory {
  public getShape (shapeType: string | null): ShapeInterface | null {
    if (shapeType == null) {
      return null;
    }

    if (shapeType.toLowerCase() == 'circle') {
      return new Circle();
    }

    if (shapeType.toLowerCase() == 'rectangle') {
      return new Rectangle();
    }

    if (shapeType.toLowerCase() == 'square') {
      return new Square();
    }

    return null;
  }
}