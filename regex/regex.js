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
