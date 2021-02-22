import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { PlaylistsComponent } from './playlists/playlists.component';
import { MusicsComponent } from './musics/musics.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormRegisterComponent } from './register/form-register/form-register.component';
import { FormInputComponent } from './form-input/form-input.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    PlaylistsComponent,
    MusicsComponent,
    RegisterComponent,
    HomeComponent,
    FormRegisterComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
