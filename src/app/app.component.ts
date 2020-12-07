import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDatatable';
  columns=[
    "ID",
    "First name",
    "Last name",
    "DOB",
    "Email",
    "Street",
    "City",
    "State",
    "Zip",
    "Country"
  ];

  data=[
    {"ID":1, "First name":"Foo","Last name":"Bar","DOB":"01/23/1983","Email":"FooBar@gmail.com","Street":"7598 Tamara rd","City":"Las Vegas","State":"Nevada","Zip":"48795","Country":"USA"},
    {"ID":2, "First name":"Someone","Last name":"YouKnow","DOB":"02/23/1983","Email":"SomeoneYouKnow@ymail.com","Street":"796 Kingstone st","City":"Boston","State":"Massachussets","Zip":"47755","Country":"USA"},
    {"ID":3, "First name":"Iamout","Last name":"ofInspiration","DOB":"01/26/1978","Email":"IamOutOfinspiration@disney.com","Street":"78 Keyko rd","City":"Brisbane","State":"New Wales","Zip":"98756","Country":"Australia"},
    {"ID":4, "First name":"Yoda","Last name":"Skywalker","DOB":"02/25/1984"},
    {"ID":5, "First name":"Patrick","Last name":"Dupont","DOB":"06/27/1983"},
    {"ID":6, "First name":"Barak","Last name":"Obama","DOB":"06/26/1976"},
    {"ID":7, "First name":"Francois","Last name":"Holland","DOB":"02/26/1976"},
    {"ID":8, "First name":"Michel","Last name":"Popo","DOB":"04/15/1995"},
    {"ID":9, "First name":"Chuck","Last name":"Norris","DOB":"04/16/1994"},
    {"ID":10, "First name":"Simon","Last name":"Robin","DOB":"04/14/1965"},
    {"ID":11, "First name":"Louis","Last name":"Lin","DOB":"07/07/1975"},
    {"ID":12, "First name":"Zelda","Last name":"Link","DOB":"12/01/1984"},
    {"ID":13, "First name":"Obed","Last name":"Catabrana","DOB":"01/03/1983"},
    {"ID":14, "First name":"Roman","Last name":"Antonio","DOB":"01/14/1993"},
    {"ID":15, "First name":"Daniel","Last name":"Blakeman","DOB":"05/07/1985"},
    {"ID":16, "First name":"Tamara","Last name":"Cedano","DOB":"12/15/1994"},
  ];

}
