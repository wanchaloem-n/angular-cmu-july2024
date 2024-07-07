import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImageProcessingComponent } from './pages/image-processing/image-processing.component';

const routes: Routes = [
  { path: ''
    , component: HomeComponent},
    { path: 'image'
    , component: ImageProcessingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
