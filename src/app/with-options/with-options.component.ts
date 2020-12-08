import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-with-options',
  templateUrl: './with-options.component.html',
  styleUrls: ['./with-options.component.scss']
})
export class WithOptionsComponent implements OnInit {

  @Input() columns:String[];
  @Input() data:any[];

  dtOptions: any = {

  };

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      columnDefs: [
        { targets: 4, 
          type: 'date' }, 
        {
          orderable: false,
          //className: 'select-checkbox',
          targets: 0
        }
      ],
      scrollX: true,
      //select: { style: 'multi' },
      order: [[1, 'asc']],
      dom: "<ft><'row'<'col-sm col-md'l><'col-sm col-md'p>>",
      rowCallBack: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        console.log("this callback>",self);
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          console.log(data);
        });
        return row;
      }
    };
    console.log("dtOptions>",this.dtOptions);
  }

}
