import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnefileFirebaseComponent } from './components/onefile-firebase/onefile-firebase.component';
import { ManyfileFirebaseComponent } from './components/manyfile-firebase/manyfile-firebase.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    OnefileFirebaseComponent,
    ManyfileFirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
