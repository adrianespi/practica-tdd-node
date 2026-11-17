import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/esPinValido.js';

describe('Función esPinValido(pin)', () => {
  it('debe devolver false si el pin es null o undefined', () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
  });

  it('debe devolver false si el pin está vacío', () => {
    expect(esPinValido('')).toBe(false);
  });

  it('debe devolver false si la longitud no es 4 o 6', () => {
    expect(esPinValido('123')).toBe(false);
    expect(esPinValido('12345')).toBe(false);
    expect(esPinValido('1234567')).toBe(false);
  });

  it('debe devolver false si contiene caracteres que no son dígitos', () => {
    expect(esPinValido('123a')).toBe(false);
    expect(esPinValido('1234.5')).toBe(false);
    expect(esPinValido(' 1234 ')).toBe(false);
  });

  it('debe devolver false si todos los dígitos son iguales (ej: "1111", "888888")', () => {
    expect(esPinValido('1111')).toBe(false);
    expect(esPinValido('0000')).toBe(false);
    expect(esPinValido('888888')).toBe(false);
    expect(esPinValido('333333')).toBe(false);
  });

  it('debe devolver true si el PIN es válido (longitud 4 o 6 con dígitos correctos y variados)', () => {
    expect(esPinValido('1234')).toBe(true);
    expect(esPinValido('9284')).toBe(true);
    expect(esPinValido('123456')).toBe(true);
    expect(esPinValido('583920')).toBe(true);
  });
});