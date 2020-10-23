import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { ModelInterface } from './model.interface';
import { ItemInterface } from './item.interface';
import { DialogService } from '../../ui/dialog.service';
import { LoadingService } from '../../loading.service';

@Component({
  selector: 'juno-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: ItemInterface[];
  @Input() model : ModelInterface;
  @Input() newPath : String;
  @Input() editPath : String;

  constructor(
    private dialogService: DialogService,
    public loadingService : LoadingService ) { }

  async ngOnInit() {
    this.items = await this.model.getItems();
  }

  async deleteTask(id:number, event:Event) {
    event.stopPropagation();
    let result = await this.dialogService.showDialog("Are you sure you want to move task "+id+" to trash?");
    if (result) {
      await this.model.deleteItem(id);
    }
  }

  drop(event:CdkDragDrop<string[]>) {
    if (event.currentIndex<event.previousIndex) {
      this.model.setBefore(this.items[event.previousIndex],this.items[event.currentIndex]);
    } else if (event.currentIndex>event.previousIndex) {
      this.model.setAfter(this.items[event.previousIndex],this.items[event.currentIndex]);
    }
    //console.log(event.currentIndex);
  }
}
