export const TRIM = (text) => text.trim();

export const UPPER = (text) => text.toUpperCase();

export const LOWER = (text) => text.toLowerCase();

export const REMOVE_DUPLICATES = (rows) =>
  Array.from(new Set(rows.map((row) => JSON.stringify(row)))).map((row) =>
    JSON.parse(row)
  );

export const FIND_AND_REPLACE = (text, find, replace) =>
  text.replace(new RegExp(find, 'g'), replace);
