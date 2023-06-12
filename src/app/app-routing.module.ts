import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueRayComponent } from './collection/blue-ray/blue-ray.component';
import { CollectionComponent } from './collection/collection.component';
import { PspComponent } from './collection/psp/psp.component';
import { SwitchComponent } from './collection/switch/switch.component';
import { WiiuComponent } from './collection/wiiu/wiiu.component';
import { XboxComponent } from './collection/xbox/xbox.component';
import { Xbox360Component } from './collection/xbox360/xbox360.component';
import { GestionBancaireComponent } from './gestion-bancaire/gestion-bancaire.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Blueray4kComponent } from './collection/blueray4k/blueray4k.component';

const routes: Routes = [
  { path: 'collection', component: CollectionComponent },
  { path: 'xbox', component: XboxComponent },
  { path: '360', component: Xbox360Component },
  { path: 'psp', component: PspComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'WiiU', component: WiiuComponent },
  { path: 'blue-ray', component: BlueRayComponent },
  { path: '4K', component: Blueray4kComponent },
  { path: 'gestion-bancaire', component: GestionBancaireComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: '', redirectTo: 'collection', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
