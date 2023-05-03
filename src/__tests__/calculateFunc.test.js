import calculate from '../logic/calculate';

describe('calculate', () => {
  it('returns the correct object when "AC" button is clicked', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('displays the correct number when a button is clicked', () => {
    const result = calculate({ total: 0, next: 0, operation: '+' }, '5');
    expect(result).toMatchObject({
      total: 0,
      next: '5',
      operation: '+',
    });
  });

  it('displays the correct number and operation when a button is clicked', () => {
    const result = calculate({ total: 0, next: 0, operation: 'x' }, '0');
    expect(result).toMatchObject({
      total: 0,
      next: '0',
      operation: 'x',
    });
  });
});
