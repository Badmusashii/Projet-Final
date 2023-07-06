import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  DragDropModule,
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

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
  // onDrop(event: CdkDragDrop<HTMLElement>) {
  //   moveItemInArray(this.div, event.previousIndex, event.currentIndex);
  // }

  // onDrop(event: CdkDragDrop<HTMLDivElement>){

  // }

  onDrop(event: CdkDragDrop<HTMLDivElement>) {
    const draggedItem = event.item.element.nativeElement;
    console.log(draggedItem);
    const targetContainer = event.container.element.nativeElement;
    const targetIndex = this.getIndex(
      event.currentIndex,
      targetContainer.children
    );
    targetContainer.insertBefore(
      draggedItem,
      targetContainer.children[targetIndex]
    );
  }

  getIndex(currentIndex: number, children: HTMLCollection): number {
    let index = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      if (!child.classList.contains('cdk-drag-placeholder')) {
        if (index === currentIndex) {
          return i;
        }
        index++;
      }
    }
    return currentIndex;
  }
}
