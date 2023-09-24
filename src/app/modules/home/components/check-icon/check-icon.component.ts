import { Component } from '@angular/core';

@Component({
  selector: 'app-check-icon',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width"
      [attr.height]="height"
      [attr.fill]="fill"
      [attr.viewBox]="viewBox"
    >
      <path [attr.d]="path"></path>
    </svg>
  `,
  styleUrls: ['./check-icon.component.scss'],
})
export class CheckIconComponent {
  width: string = '32';
  height: string = '32';
  fill: string = '#fff';
  viewBox: string = '0 0 16 16';
  path: string =
    'M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z';

  constructor() {}
}
