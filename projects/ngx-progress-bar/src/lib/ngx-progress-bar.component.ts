import { Component, Input, OnInit } from '@angular/core';
import { TextPosition } from './enums/text-position';

@Component({
  selector: 'ngx-progress-bar',
  template: `
     <div [fxLayoutAlign]="textPosition"  style="width: inherit; min-width: 100px; max-width: inherit;  height: inherit; min-height: 6px;  max-height: inherit; "   
          [style.borderRadius]="(borderRadiusX + 'px ' + borderRadiusY + 'px')"
          [style.background]="('linear-gradient(to right,  ' + fillColor + ' '  + value + '%, ' + defaultColor + ' ' + value + '%!important')"
          [style.color] = "textColor"
          [style.font] = "textFont"
          >
        <span *ngIf="showText && showPercentageSymbol"  >{{ (value / 100)  | percent : percentagePipeDigitInfo : percentagePipeLocale }}</span> 
        <span *ngIf="showText && !showPercentageSymbol"  >{{ (value / 100) }}</span> 
     </div>
  `,
  styles: [
  ]
})
export class NgxProgressBarComponent implements OnInit {
  @Input() value: number = 0;
  @Input() fillColor: string = '#3f51b5';
  @Input() defaultColor: string = '#bcd1e2';
  @Input() textFont: string = '10px Arial, sans-serif';
  @Input() textColor: string = 'white';
  @Input() textPosition: TextPosition = TextPosition.centercenter;
  @Input() showText: boolean = false;
  @Input() borderRadiusX: number = 0;
  @Input() borderRadiusY: number = 0;
  @Input() showPercentageSymbol: boolean = true;
  @Input() percentagePipeDigitInfo: string = ''
  @Input() percentagePipeLocale: string = ''


  TextPosition = TextPosition;
  constructor() { }

  ngOnInit(): void {
    this.TextPosition.centercenter
  }


}
