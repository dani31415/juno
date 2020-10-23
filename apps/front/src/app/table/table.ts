import { ItemInterface } from '../ui/list/item.interface';

export class Table implements ItemInterface {
    public id: number;
    public title: string;
    public rows?: string[][];
}