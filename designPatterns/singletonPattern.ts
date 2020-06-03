import { SingleObject } from "./singleton/singleObject";

export function singleton (): void {
  const singleObject: SingleObject = SingleObject.getInstance();

  singleObject.showMessage();
}