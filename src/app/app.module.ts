import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment'; 
import { ClienteService } from './services/cliente.service';
import { PerfilService } from './services/cadastrar.service';
import { CadastrarPerfilPageModule } from './cadastrar-perfil/cadastrar-perfil.module';
import { MarcarConsultaPageModule } from './marcar-consulta/marcar-consulta.module';
import { ConsultaService } from './services/consulta.service';
import { exameService } from './services/exame.service';
import { PerfilsPageModule } from './perfils/perfils.module';
import { PerfilsService } from './services/perfils.service';
import { medicoService } from './services/medico.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    CadastrarPerfilPageModule,
    MarcarConsultaPageModule,
    PerfilsPageModule,
    FormsModule,
    ReactiveFormsModule,
    ], 
    providers: [
      StatusBar,
      SplashScreen,
      ClienteService,
      PerfilService,
      PerfilsService,
      ConsultaService,
      exameService,
      medicoService,
      
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  constructor( private router: Router
    ){}

  private fichamedica() {
    this.router.navigateByUrl('/ficha-medica');
   }

   
}
