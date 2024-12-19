import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Your Home Component
import { ContactComponent } from './contact/contact.component';  // Importing Contact Component

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'contact', component: ContactComponent },  // Contact route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
