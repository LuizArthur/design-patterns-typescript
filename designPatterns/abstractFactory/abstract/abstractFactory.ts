import { ShapeInterface } from "../interface/shape/shapeInterface";

export abstract class AbstractFactory {
  abstract getShape (shapeType: string): ShapeInterface | null;
}