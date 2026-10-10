export function esPinValido(pin) {
    if (pin === null || pin === undefined) {
      return false;
    }
  
    const pinStr = String(pin);
  
    const esFormatoValido = /^(\d{4}|\d{6})$/.test(pinStr);
    
    const todosIguales = /^(\d)\1+$/.test(pinStr);
  
    return esFormatoValido && !todosIguales;
  }