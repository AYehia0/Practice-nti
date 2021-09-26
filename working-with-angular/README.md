# WorkingWithAngular

Learning Process : 

  - Binding : 

      - One-way data binding: 
         - String interpolation ```<h1>{{appName}}</h1>```
         - Event Binding ```<button (click)="showData($event)">Click here</button>```
         - Property binding: ```<input type="text" [value]="userName">```
         - Attribute binding: ```<td [attr.colspan]="columnSpan"> ... </td>```
         - Class binding: ```<p [class]="myClasses">```
         - Style binding: ```<p [style.color]="myParaColor"> ... </p>```
      - Two-way binding: 
         - NgModel: needs to ```import { FormsModule } from '@angular/forms'``` then  ```<input type="text" [(ngModel)]="model.name" />``` 
       
  - Angular Material : 

      - To install the project : ```ng add @angular/material``` more info [AngularMaterial](https://material.angular.io/guide/getting-started)
      - Imports : ```Buttons, Icons, Toolbar, Card, Input, Expansion```
      
