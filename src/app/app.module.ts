import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPopperjsModule } from 'ngx-popperjs';
// Material - START
import { MatRadioModule } from '@angular/material/radio';
// Material - END
import { AppComponent } from './app.component';
import { TourWizardModule } from 'ngx-tour-wizard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatRadioModule,
    NgxPopperjsModule,
    TourWizardModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
