import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: 'AIzaSyCw6NN1YMZo_sWPjsfXvi2gEuqkRVtjTZw',
        authDomain: 'angular-email-password.firebaseapp.com',
        databaseURL: 'https://angular-email-password.firebaseio.com',
        projectId: 'angular-email-password',
        storageBucket: 'angular-email-password.appspot.com',
        messagingSenderId: '171854694580',
        appId: '1:171854694580:web:6b72e2285c69d507a12fe1',
        measurementId: 'G-98MFLHNK2M'
      }
    ),
    AngularFirestoreModule, // only required for database features
    AngularFireAuthModule,  // only required for auth features
    AngularFireStorageModule // only required for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
