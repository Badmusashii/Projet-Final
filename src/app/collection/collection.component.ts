import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  goToXbox() {
    this.router.navigate(['/xbox']);
  }
  goTo360() {
    this.router.navigate(['360']);
  }
  goToPsp() {
    this.router.navigate(['/psp']);
  }
  goToSwitch() {
    this.router.navigate(['/switch']);
  }
  goToBlueRay() {
    this.router.navigate(['/blue-ray']);
  }
  goTo4k() {
    this.router.navigate(['4K']);
  }
  goToWiiU() {
    this.router.navigate(['/WiiU']);
  }
}
