import { PackingInterface } from "./packingInterface";

export interface ItemInterface {
  name(): string;
  packing(): PackingInterface;
  price(): number;
}