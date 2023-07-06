import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { CollectionComponent } from './collection/collection.component';
import { GestionBancaireComponent } from './gestion-bancaire/gestion-bancaire.component';
import { XboxComponent } from './collection/xbox/xbox.component';
import { PspComponent } from './collection/psp/psp.component';
import { SwitchComponent } from './collection/switch/switch.component';
import { BlueRayComponent } from './collection/blue-ray/blue-ray.component';
import { WiiuComponent } from './collection/wiiu/wiiu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from './service/search.service';
import { ToUpperCasePipe } from './service/to-upper-case.pipe';
import { FilterPipe } from './service/filter.pipe';
import { SearchGameService } from './service/search-game.service';
import { Blueray4kComponent } from './collection/blueray4k/blueray4k.component';
import { Xbox360Component } from './collection/xbox360/xbox360.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    CollectionComponent,
    GestionBancaireComponent,
    XboxComponent,
    PspComponent,
    SwitchComponent,
    BlueRayComponent,
    WiiuComponent,
    ToUpperCasePipe,
    FilterPipe,
    Blueray4kComponent,
    Xbox360Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SearchService, ToUpperCasePipe, SearchGameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
