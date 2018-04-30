import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule, SharedModule } from '@tabler/angular-core'

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore'

import { environment } from '../environments/environment'

import { AuthModule } from './auth/auth.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppService } from './app.service'
import { BsDropdownModule } from 'ngx-bootstrap'

@NgModule({
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    // Tabler
    CoreModule,
    SharedModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // Application modules & routing
    AuthModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AppService],
})
export class AppModule {
  constructor(app: AppService, db: AngularFirestore) {
    app.init()
    db.firestore.settings({
      timestampsInSnapshots: true,
    })
  }
}
