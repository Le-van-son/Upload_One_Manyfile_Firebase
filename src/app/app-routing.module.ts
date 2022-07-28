import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnefileFirebaseComponent} from "./components/onefile-firebase/onefile-firebase.component";

const routes: Routes = [{
  path: '',
  component: OnefileFirebaseComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
