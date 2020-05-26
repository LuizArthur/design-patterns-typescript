import { ShapeInterface } from "../../interface/shape/shapeInterface";

export class Rectangle implements ShapeInterface {
  draw(): void {
    console.log("This is a Rectangle");
  }
  
}