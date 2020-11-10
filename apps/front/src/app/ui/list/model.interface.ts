import { ItemInterface } from './item.interface';

export interface ModelInterface {
    getItems() : Promise<ItemInterface[]>;
    deleteItem(id:number) : Promise<void>;
    setBefore(previous:ItemInterface, current:ItemInterface) : void;
    setAfter(previous:ItemInterface, current:ItemInterface) : void;
}

