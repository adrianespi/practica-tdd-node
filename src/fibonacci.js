function fibonacci(n) {
  if (n < 0) {
    throw new RangeError("solo números enteros ≥ 0");
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let resultado = 0;

  for (let i = 2; i <= n; i++) {
    resultado = a + b;
    a = b;
    b = resultado;
  }

  return resultado;
}

export { fibonacci };