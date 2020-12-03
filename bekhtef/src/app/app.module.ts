import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyASwB08zJHzvMPBcLLabPy1nBaji2O2Z54",
      authDomain: "nodal-wall-296010.firebaseapp.com",
      databaseURL: "https://nodal-wall-296010.firebaseio.com",
      projectId: "nodal-wall-296010",
      storageBucket: "nodal-wall-296010.appspot.com",
      messagingSenderId: "854220755173",
      appId: "1:854220755173:web:9cc8f69b56a5fa955f440c",
      measurementId: "G-G1NBE7JQ6E"
    }),
    AngularFireStorageModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    TranslateModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
