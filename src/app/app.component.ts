import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'financial-portfolio';
  displayedColumns: any;
  dataSource: any;

  isItemClicked = false;

  ELEMENT_DATA = [
    {position: 1, amount: '5000', startDate: '1 Jan 2001', maturityDate: '1 Jan 2006'},
    {position: 2, amount: '2000', startDate: '7 Feb 2001', maturityDate: '7 Feb 2006'},
    {position: 3, amount: '400', startDate: '19 July 2021', maturityDate: '19 July 2026'},
    {position: 4, amount: '5000', startDate: '4 June 2010', maturityDate: '4 June 2015'},
    {position: 5, amount: '2000', startDate: '21 Apr 2001', maturityDate: '21 Apr 2006'},
  ];

  constructor() {}

  ngOnInit() {
    this.displayedColumns = ['position', 'amount', 'startDate', 'maturityDate'];
    this.dataSource = this.ELEMENT_DATA;
  }

  itemClicked() {
    this.isItemClicked = true;
  }

}
