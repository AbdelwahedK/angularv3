import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core'; 
import {FormsModule} from '@angular/forms';

import {AgGridModule} from 'ag-grid-angular';
import { AthleteEditScreenComponent } from './athlete-edit-screen.component';
import { GridComponent } from './grid.component';
import { AthleteService } from './athlete.service';
import { StaticDataService } from './static-data.service';
 

@NgModule({
    declarations: [
        // AppComponent,
        GridComponent,
        AthleteEditScreenComponent
    ],
    imports: [
        BrowserModule,
        // HttpModule,
        FormsModule,
        AgGridModule.withComponents([])
    ],
    providers: [
        AthleteService,
        StaticDataService
    ],
    // bootstrap: [AppComponent]
})
export class GridExempleModule {
}
