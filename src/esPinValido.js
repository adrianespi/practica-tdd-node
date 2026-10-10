function esPinValido(pin) {
    if (pin === null || pin === undefined || pin === '') {
      return false;
    }
  
    const pinStr = String(pin);
  
    if (pinStr.length !== 4 && pinStr.length !== 6) {
      return false;
    }

    if (!/^\d+$/.test(pinStr)) {
      return false;
    }
  
    const allSame = pinStr.split('').every(digit => digit === pinStr[0]);
    if (allSame) {
      return false;
    }
  
    return true;
  }
  
  export { esPinValido };