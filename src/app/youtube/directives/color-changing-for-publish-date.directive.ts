import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { TimeStamp, CardBorderColor } from '../../../constants/сonstants';

@Directive({
  selector: '[border-color-for-date]',
})
export class ColorChangingForPublishDateDirective implements OnInit {
  @Input() private date: string;

  protected timestamp: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.timestamp = +Date.now() - Date.parse(this.date);
    this.setBorderColor(this.timestamp);
  }

  private setBorderColor(timestamp: number): void {
    const color: string =
      timestamp <= TimeStamp.WeekTimeStamp
        ? CardBorderColor.LessThanWeekColor
        : timestamp <= TimeStamp.MonthTimeStamp
        ? CardBorderColor.LessThanMonthColor
        : timestamp <= TimeStamp.HalfYearTimeStamp
        ? CardBorderColor.LessThanHalfYearColor
        : CardBorderColor.MoreThanHalftYearColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderBottom', `5px solid ${color}`);
  }
}
