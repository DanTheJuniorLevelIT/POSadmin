import { CurrencyWithColorPipe } from './currency-with-color.pipe';

describe('CurrencyWithColorPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyWithColorPipe();
    expect(pipe).toBeTruthy();
  });
});
