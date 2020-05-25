import { ShapeInterface } from './shapeInterface';

export class Rectangle implements ShapeInterface {
  draw(): void {
    console.log("This is a rectangle");
  }  
}