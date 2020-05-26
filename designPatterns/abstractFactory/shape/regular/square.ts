import { ShapeInterface } from "../../interface/shape/shapeInterface";

export class Square implements ShapeInterface {
  draw(): void {
    console.log("This is a Square");
  }
  
}