import { AbstractFactory } from "../abstract/abstractFactory";
import { RoundedShapeFactory } from "./roundedShapeFactory";
import { ShapeFactory } from "./shapeFactory";

export class FactoryProducer {
  public static getFactory (isRounded: boolean): AbstractFactory {
    if (isRounded) {
      return new RoundedShapeFactory();
    }

    return new ShapeFactory();
  }
}