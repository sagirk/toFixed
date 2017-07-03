// Function signature:
  // toFixed(value, optionalPrecision)

// Parameters:
  // value: The number object.
  // optionalPrecision: The number of digits to appear after the decimal point (this may be a value between 0 and 20, inclusive).

// Return value:
  // A string representing the given number using fixed-point notation.

// Exceptions:
  // RangeError: If optionalPrecision is too small or too large (outside of values between 0 and 20).
  // TypeError: If value is not a Number.

// Requirements:
  // It should return a string representation of value.
  // It should not use exponential notation.
  // It should have exactly optionalPrecision digits after the decimal place.
  // It should round the number if necessary.
  // It should pad the fractional part with zeroes if necessary.

// Edge cases:
  // It should return a string in exponential notation for values greater than 1e+21.
  // It should throw a RangeError if optionalPrecision is not a value within 0 and 20.
  // It should throw a TypeError if value is not a Number.