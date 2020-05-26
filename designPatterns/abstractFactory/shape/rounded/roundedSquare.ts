import { ShapeInterface } from "../../interface/shape/shapeInterface";

export class RoundedSquare implements ShapeInterface {
  draw(): void {
    console.log("This is a Rounded Square");
  }
  
}