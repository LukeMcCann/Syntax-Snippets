export const ALPHANUMERIC_WHITESPACE_PATTERN = /^[a-zA-Z0-9 ]*$/g;

// eslint-disable-next-line no-useless-escape
export const ALPHANUMERIC_WHITESPACE_DIACTRIC_PATTERN = /^[\'\'\"\"\(\)\pL\pN\s]+$/;

export const ALPHANUMERIC_WITHOUT_WHITESPACE_PATTERN = /^[a-zA-Z0-9]*$/g;

export const ASTERISK_NAME = /^[A-Za-z0-9-]*$/g;

export const JS_IDENTIFIER_PATTERN = /^[a-z_][a-z0-9_]*$/g;

export const ALPHA_WHITESPACE_PATTERN = /^[a-zA-Z\s]*$/g;

export const ALPHA_NOWHITESPACE_PATTERN = /^[A-Za-z]+$/;

export const NUMERIC_WHITESPACE_PATTERN = /^\d+$/;

export const CAMPAIGN_CUSTOM_ID_PATTERN = /^\d{1,14}$/;

export const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

// checks for lowercase numeric and underscore characters
export const LOWERCASE_NUMERIC_UNDERSCORE_PATTERN = /^[a-z0-9_]+$/g;

// checks for lowercase and underscore characters
export const LOWERCASE_UNDERSCORE_PATTERN = /^[a-z_]+$/g;

// Based on the E.146 format but modified (doesn't support () in phone numbers)
export const TELEPHONE_NUMBER_PATTERN = /^\+?[0-9 ]{0,14}$/g;

// We will check the format for the external extensions. They should be numeric from 10 digits to 23 digits.
export const EXTERNAL_EXTENSION = /^((\+|00)[1-9]([0-9])\d{9,23}|0\d{9,10})?$/;

export const DOMAIN_PATTERN = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;

export const DIAL_PREFIX_AND_EXTERNAL_TELEPHONE_NUMBER = /^[0-9]{1,3}\+[0-9]{8,23}|\+?[0-9]{9,23}/;

