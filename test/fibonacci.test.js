import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('Función fibonacci(n)', () => {
  it('debe lanzar una excepción RangeError con el texto "solo números enteros ≥ 0" si n < 0', () => {
    expect(() => fibonacci(-1)).toThrowError(RangeError);
    expect(() => fibonacci(-1)).toThrowError('solo números enteros ≥ 0');
    expect(() => fibonacci(-5)).toThrowError('solo números enteros ≥ 0');
  });

  it('debe devolver 0 si n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('debe devolver 1 si n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('debe calcular correctamente el fibonacci para n >= 2 usando f(n) = f(n-1) + f(n-2)', () => {
    expect(fibonacci(2)).toBe(1);  // f(1) + f(0) = 1 + 0 = 1
    expect(fibonacci(3)).toBe(2);  // f(2) + f(1) = 1 + 1 = 2
    expect(fibonacci(4)).toBe(3);  // f(3) + f(2) = 2 + 1 = 3
    expect(fibonacci(5)).toBe(5);  // 5º término
    expect(fibonacci(7)).toBe(13); // 7º término
  });
});