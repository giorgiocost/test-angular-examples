import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificarIdadeComponent } from './verificar-idade/verificar-idade.component';


const routes: Routes = [
  {path: '', component: VerificarIdadeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
