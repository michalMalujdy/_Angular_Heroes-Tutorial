import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
  ]) ],
  exports: [ RouterModule ]
 })

export class AppRoutingModule { 
}
