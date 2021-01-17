import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard'; 

const redirectToLogin = () => redirectUnauthorizedTo(['login']); 

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cadastro-perfil',
    loadChildren: () => import('./cadastro-perfil/cadastro-perfil.module').then( m => m.CadastroPerfilPageModule)
  },
  {
    path: 'ficha-medica',
    loadChildren: () => import('./ficha-medica/ficha-medica.module').then( m => m.FichaMedicaPageModule)
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule)
  },
  {
    path: 'agendar-exame',
    loadChildren: () => import('./agendar-exame/agendar-exame.module').then( m => m.AgendarExamePageModule)
  },
  {
    path: 'marcar-consulta',
    loadChildren: () => import('./marcar-consulta/marcar-consulta.module').then( m => m.MarcarConsultaPageModule)
  },
  {
    path: 'laudos-medicos',
    loadChildren: () => import('./laudos-medicos/laudos-medicos.module').then( m => m.LaudosMedicosPageModule)
  },
  {
    path: 'assinaturas',
    loadChildren: () => import('./assinaturas/assinaturas.module').then( m => m.AssinaturasPageModule)
  },
  {
    path: 'exames-marcados',
    loadChildren: () => import('./exames-marcados/exames-marcados.module').then( m => m.ExamesMarcadosPageModule)
  },
  {
    path: 'consultas-marcadas',
    loadChildren: () => import('./consultas-marcadas/consultas-marcadas.module').then( m => m.ConsultasMarcadasPageModule)
  },  {
    path: 'sair',
    loadChildren: () => import('./sair/sair.module').then( m => m.SairPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./consultas/consultas.module').then( m => m.ConsultasPageModule)
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
