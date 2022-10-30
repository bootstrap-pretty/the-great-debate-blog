// If string is a number
export const isNumber = n => /^-?[\d.]+(?:e-?\d+)?$/.test(n);

// If all values in an array equal false
export const allEqualFalse = currentValue => currentValue === false;