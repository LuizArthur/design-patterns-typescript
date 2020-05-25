import { ShapeInterface } from './shapeInterface';

export class Square implements ShapeInterface {
  draw(): void {
    console.log("This is a square");
  }  
}