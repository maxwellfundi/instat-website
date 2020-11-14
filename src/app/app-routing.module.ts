import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DevelopersComponent } from './developers/developers.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
   path: 'home',
   component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }, 

  {
    path: 'download',
    component: DownloadComponent
  }, 

  {
    path: 'support',
    component: SupportComponent
  }, 

  {
    path: 'developers',
    component: DevelopersComponent
  }, 
 {
    path: 'contact',
    component: ContactComponent
  }, 
  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
