import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImageProcessingPageComponent } from './pages/image-processing-page/image-processing-page.component';
import { ImageProcessingWaitingPageComponent } from './pages/image-processing-waiting-page/image-processing-waiting-page.component';

const routes: Routes = [

 { path: '', component: HomePageComponent},
 { path: 'image', component: ImageProcessingPageComponent},
 { path: 'image-waiting', component: ImageProcessingWaitingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
