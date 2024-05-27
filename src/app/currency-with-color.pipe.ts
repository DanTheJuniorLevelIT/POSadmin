import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyWithColor',
  standalone: true
})
export class CurrencyWithColorPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {} // Inject the CurrencyPipe

  transform(value: number | string, ...args: any[]): string {
    const formattedValue = this.currencyPipe.transform(value, ...args); // Format currency
    const isNegative = parseInt(value as string) < 0;

    return `<span [ngStyle]="{color: ${isNegative ? '\'red\'' : '\'inherit\''}}">${formattedValue}</span>`;
  }
}