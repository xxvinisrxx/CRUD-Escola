import { SchoolComponent } from './feature/school/school.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ListComponent } from './feature/pupils/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: '/Escola',    pathMatch: 'full'},
  { path: 'Escola', component: SchoolComponent },
  { path: 'Alunos' , component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
