import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainComponent } from './pages/main/main.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { MenuHeaderComponent } from './features/menu-header/menu-header.component';
import { NavMenuComponent } from './features/nav-menu/nav-menu.component';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { SliderModule } from 'primeng/slider';
import { KeyFilterModule } from 'primeng/keyfilter';

import { ColorPickerComponent } from './features/color-picker/color-picker.component';

import { First100Pipe } from './pipes/first100.pipe';
import { DottDateFormat } from './pipes/dottdateformat.pipe';
import { DateTimeFormat } from './pipes/datetimeformat.pipe';
import { ThousandPipe } from './pipes/thousand.pipe';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

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
    ThousandPipe,
    PostDetailsComponent,
    PostsPageComponent,
    SettingsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ColorPickerModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    ChartModule,
    SliderModule,
    ColorPickerComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU'},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
