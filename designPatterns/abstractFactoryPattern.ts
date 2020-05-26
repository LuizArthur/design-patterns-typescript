import { AbstractFactory } from "./abstractFactory/abstract/abstractFactory";
import { FactoryProducer } from "./abstractFactory/factory/factoryProducer";
import { ShapeInterface } from "./abstractFactory/interface/shape/shapeInterface";

export function abstractFactoryPattern (): void {
  const roundedFactory: AbstractFactory = FactoryProducer.getFactory(true);
  const factory: AbstractFactory = FactoryProducer.getFactory(false)

  const roundedRectangle: ShapeInterface | null = roundedFactory.getShape('RoundedRectangle');
  const roundedSquare: ShapeInterface | null = roundedFactory.getShape('RoundedSquare');
  const rectangle: ShapeInterface | null = factory.getShape('Rectangle');
  const square: ShapeInterface | null = factory.getShape('Square');

  if (roundedRectangle != null) {
    roundedRectangle.draw();
  }

  if (roundedSquare != null) {
    roundedSquare.draw();
  }

  if (rectangle != null) {
    rectangle.draw();
  }

  if(square != null) {
    square.draw();
  }
}