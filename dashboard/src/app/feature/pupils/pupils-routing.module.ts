import { PupilsComponent } from './pupils.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PupilsComponent, children: [
    { path: '', redirectTo: 'list', pathMatch: 'prefix' },
    { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PupilsRoutingModule { }


