import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListComponent } from './components/inbox/inbox.component';
import { EmployeesService } from './services/employees.service';
import { AdapterService } from './services/adapter.service';
import { ItemComponent } from './components/inbox/item/item.component';
import { AcceptanceControlComponent } from './components/inbox/item/acceptance-control/acceptance-control.component';
import { ButtonDetailsComponent } from './components/inbox/item/button-details/button-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    AcceptanceControlComponent,
    ButtonDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [
    EmployeesService,
    AdapterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
