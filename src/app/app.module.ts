import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatDialogModule } from '@angular/material/dialog';
import { DataService } from './data.service';
import { RecosComponent } from './recos/recos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularFittextModule } from 'angular-fittext';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FilmOverviewComponent } from './film-overview/film-overview.component';
import { SafePipe } from './safe.pipe';
import { RatingModule } from 'ng-starrating';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RecosComponent,
    LoginComponent,
    UserComponent,
    FilmOverviewComponent,
    SafePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTooltipModule,
    AngularFittextModule,
    RatingModule,
    ScrollingModule
  ],
  entryComponents: [RecosComponent, LoginComponent, FilmOverviewComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
