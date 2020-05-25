import { ShapeInterface } from './shapeInterface';

export class Circle implements ShapeInterface {
  draw(): void {
    console.log("This is a circle");
  }  
}