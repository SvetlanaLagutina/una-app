import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainComponent } from './pages/main/main.component';
import { MenuHeaderComponent } from './features/menu-header/menu-header.component';
import { NavMenuComponent } from './features/nav-menu/nav-menu.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule }   from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';

import { First100Pipe } from './first100.pipe';
import { DottDateFormat } from './dottdateformat.pipe';
import { DateTimeFormat } from './datetimeformat.pipe';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MainComponent,
    MenuHeaderComponent,
    NavMenuComponent,
    First100Pipe,
    DottDateFormat,
    DateTimeFormat,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
