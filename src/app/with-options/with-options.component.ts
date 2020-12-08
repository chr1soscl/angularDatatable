import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-with-options',
  templateUrl: './with-options.component.html',
  styleUrls: ['./with-options.component.scss']
})
export class WithOptionsComponent implements OnInit {

  @Input() columns:String[];
  @Input() data:any[];
  message="";

  constructor(){}

  dtOptions: any = {};

  someClickHandler(info: any): void {
    console.log("this.message>",info);
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      columnDefs: [
        { targets: 4, 
          type: 'date' }, 
        {
          orderable: false,
          className: 'select-checkbox',
          targets: 0
        }
      ],
      scrollX: true,
      select: { style: 'multi' },
      order: [[1, 'asc']],
      dom: "<Bft><'row'<'col-sm col-md'l><'col-sm col-md'p>>",
      buttons:['selectAll','selectNone'],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        console.log("rowCallBack");
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          console.log("row>",row);
          self.someClickHandler(data);
        });
        return row;
      }
    };
    console.log("dtOptions>",this.dtOptions);
  }

}
