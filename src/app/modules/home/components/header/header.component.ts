import { Component } from '@angular/core';
import Color from 'src/app/shared/models/Color';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public canViewPallete: boolean = false;
  public selectedColor: string = 'blue';
  public colors = [
    { id: 'blue', hexCode: '#102f5e' },
    { id: 'purple', hexCode: '#4f2bb4' },
    { id: 'orange', hexCode: '#d75413' },
    { id: 'pink', hexCode: '#c833ad' },
    { id: 'green', hexCode: '#159287' }
  ];

  public secondaryColors = [
    { id: 'blue', hexCode: '#395169' },
    { id: 'purple', hexCode: '#7b67b2' },
    { id: 'orange', hexCode: '#cd7f47' },
    { id: 'pink', hexCode: '#e671e0' },
    { id: 'green', hexCode: '#42c5b2' }
  ];

  constructor() {}

  public viewPallete() {
    this.canViewPallete = !this.canViewPallete;
  }

  onColorClick(id: string): void {
    this.selectedColor = id;
    this.canViewPallete = false;
  }
}