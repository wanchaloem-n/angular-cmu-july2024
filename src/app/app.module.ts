import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImageProcessingPageComponent } from './pages/image-processing-page/image-processing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ImageProcessingContentComponent } from './components/image-processing-content/image-processing-content.component';

// ==========
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WaitingComponent } from './components/waiting/waiting.component';
import { ImageProcessingWaitingPageComponent } from './pages/image-processing-waiting-page/image-processing-waiting-page.component';
import { ImageProcessingWaitingContentComponent } from './components/image-processing-waiting-content/image-processing-waiting-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ImageProcessingPageComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    ImageProcessingContentComponent,
    WaitingComponent,
    ImageProcessingWaitingPageComponent,
    ImageProcessingWaitingContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
