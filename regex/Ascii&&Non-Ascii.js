// Matches any character is the ASCII range && any character outside the ASCII range including diatrics.
export const ALPHANUMERIC_WHITESPACE_SPECIALCHAR_PATTERN = /^.*(?=.{8,})(?=.*[a-zA-Z\\u0080-\\uFFFF])(?=.*\d).*$/;
