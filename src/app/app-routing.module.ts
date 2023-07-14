import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TableReservationComponent } from './table-reservation/table-reservation.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';

import { AdminDashboardComponent } from './dashboard copy/dashboard.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reserve_table', component: TableReservationComponent},
  { path : 'login', component: UserLogInComponent},
  { path : 'admin-login',  component : AdminLogInComponent},
  {path : '',
  component:FullComponent,
  children : [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
      path:'dashboard',
      loadChildren : ()=>
      import ('./dashboard copy/dashboard.module').then((m)=>m.DashboardModule)
    },
  ],
},

  //{path : 'admin' , component:AdminDashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
