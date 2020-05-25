import { ShapeInterface } from './factory/shape/shapeInterface';
import { ShapeFactory } from './factory/shapeFactory';

export function factoryPattern (): void {
  const shapeFacotry: ShapeFactory = new ShapeFactory();

  const shape1: ShapeInterface | null = shapeFacotry.getShape('Circle');
  if(shape1 != null) {
    shape1.draw();
  }

  const shape2: ShapeInterface | null = shapeFacotry.getShape('Rectangle');
  if(shape2 != null) {
    shape2.draw();
  }

  const shape3: ShapeInterface | null = shapeFacotry.getShape('Square');
  if(shape3 != null) {
    shape3.draw();
  }
}