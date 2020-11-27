import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'ui-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css']
})
export class TableGridComponent implements OnInit, OnChanges {
  @Input() rows : string[][];
  @Output() changed = new EventEmitter<string[][]>();

  public _rows : string[][];
  public _dataRows : string[][];
  private nCols : number;

  constructor() { 
  }

  ngOnInit(): void {
    // Using ngOnChanges instead
  }

  public onChange(event,i,j) {
    let elem = document.getElementById('cell-'+i+'-'+j);
    if (j==this.nCols-1) { // Add column
      TableGridComponent.addColumn(this._rows,' ');
      this.nCols++;  
      TableGridComponent.addColumn(this._dataRows,' ');
      this.changed.emit(this._dataRows);
      elem.innerHTML = elem.innerHTML.trim(); // remove artifical space needed for caret
    }
    if (i==this._rows.length-1) { // Add row
      this._rows.push(TableGridComponent.emptyRow(this.nCols));
      this._dataRows.push(TableGridComponent.emptyRow(this.nCols-1));
      this.changed.emit(this._dataRows);
      elem.innerHTML = elem.innerHTML.trim(); // remove artifical space needed for caret
    }
    // Note that we do not update this._rows since it will imply losing the caret
    // position and focus
    //if (elem.innerText!=elem.innerHTML) { // has HTML?
    //  elem.innerHTML = elem.innerText; // remove html
    //}
    if (elem.innerText.length==0) elem.innerText=' '; // at least one space
    this._dataRows[i][j] = elem.innerHTML;
    
    this.changed.emit(this._dataRows);
    this.update();
    // Copy table exept last row and column
    /* let output = [];
    for (let i=0;i<this._rows.length-1;i++) {
      let srcRow = this._rows[i];
      let destRow : string[] = [];
      output.push(destRow);
      for (let j=0;j<srcRow.length-1;j++) {
        destRow.push(srcRow[j]);
      }
    }
    this.changed.emit(output);*/
  }

  public onKeyDown(event,i,j) {
    //  console.log(JSON.stringify(event));
    if (event.code=='ArrowUp' || event.code=='ArrowDown') {
      if (event.code=='ArrowDown') {
        i++;
      }
      if (event.code=='ArrowUp') {
        i--;
      }
      let elem = document.getElementById('cell-'+i+'-'+j);
      if (elem) {
        elem.focus();
      }
    }
  }

  public ngOnChanges(changes) {
    if (changes.rows) {
      let eq = TableGridComponent.equals(changes.rows.currentValue, this._dataRows);
      console.log('changes. equals=',eq)
      if (!eq) {
        // Clone this._dataRows into _rows and _dataRows
        this._rows = TableGridComponent.clone(changes.rows.currentValue);
        this._dataRows = TableGridComponent.clone(changes.rows.currentValue);
    
        // Add empty row  and column to the end
        TableGridComponent.addColumn(this._rows, ' ');
        this.nCols = this._rows[0].length;
        this._rows.push(TableGridComponent.emptyRow(this.nCols));
        this.update();
      }
    }
  }

  public static emptyRow(n) {
    let newRow = [];
    for (let i=0;i<n;i++) {
      newRow.push(' ');
    }
    return newRow;
  }

  public static addColumn(grid:string[][], value:string) {
    for (let row of grid) {
      row.push(value);
    }
  }

  public static clone(grid:string[][]) : string[][] {
    let output = [];
    for (let row of grid) {
      let newRow = [];
      output.push(newRow);
      for (let cell of row) {
        newRow.push(cell);
      }
    }
    return output;
  }

  public static equals(grid1:string[][], grid2:string[][]) {
    if (grid1==grid2) return true;
    if (grid1==null || grid2==null) return false;
    if (grid1.length!=grid2.length) return false;
    for (let i=0;i<grid1.length;i++) {
      let row1 = grid1[i];
      let row2 = grid2[i];
      if (row1==row2) continue;
      if (row1==null || row2==null) return false;
      if (row1.length!=row2.length) return false;
      for (let j=0;j<row1.length;j++) {
        if (row1[j]!=row2[j]) return false;
      }
    }
    return true;
  }

  private update() {
    if (this['forceUpdate']) 
      this['forceUpdate']();
  }

} 
