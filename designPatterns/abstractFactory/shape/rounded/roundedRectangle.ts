import { ShapeInterface } from '../../interface/shape/shapeInterface';

export class RoundedRectangle implements ShapeInterface {
  draw(): void {
    console.log('This is a rounded Rectangle');
  }
  
}