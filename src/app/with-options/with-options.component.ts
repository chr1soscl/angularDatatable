import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-options',
  templateUrl: './with-options.component.html',
  styleUrls: ['./with-options.component.scss']
})
export class WithOptionsComponent implements OnInit {

  dtOptions: DataTables.Settings = {

  };

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      columnDefs: [{ targets: 3, type: 'date' }, {
        orderable: false,
        className: 'select-checkbox',
        targets: 0
      }],
      select: { style: 'multi' },
      order: [[1, 'asc']]

    };
  }

}
