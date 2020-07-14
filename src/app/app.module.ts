import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { 
  ToDoListComponent,
  ToDoCreateComponent
} from './components';
const components = [
  ToDoListComponent,
  ToDoCreateComponent
]

import { ToDoService } from './services';
const services = [
  ToDoService
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModalModule,
  ],
  providers: [
    ...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
