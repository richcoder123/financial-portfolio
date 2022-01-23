import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';

interface ItableStructure {
  amount: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {

  @Input() displayedCols: string[];
  @Input() data: any;

  dataSource: any;
  displayedColumns: any;

  constructor() { 
    this.displayedCols = [];
  }

  ngOnInit(): void {
    this.displayedColumns = this.displayedCols;
  }

  ngOnChanges(changes: any) {
    this.data = changes['data'].currentValue;
    this.displayedColumns = changes['displayedCols'].currentValue;
  }

  getLabel(field: any): string {
    return field;
  }

  getValue(field: string, element: any): string {
    return element[field];
  }

  displayTableData() {
    return this.data.length > 0 ? true : false; 
  }

}
