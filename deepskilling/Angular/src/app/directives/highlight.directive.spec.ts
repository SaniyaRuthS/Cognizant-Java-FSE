import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const mockEl: ElementRef = { nativeElement: document.createElement('div') };
    const directive = new HighlightDirective(mockEl);
    expect(directive).toBeTruthy();
  });
});
