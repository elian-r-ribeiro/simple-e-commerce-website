import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  products = [
    'Mouse',
    'Keyboard',
    'Monitor',
    'RGB Fan'
  ];
  
}

