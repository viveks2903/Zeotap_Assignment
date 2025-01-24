export const SUM = (values) => values.reduce((sum, val) => sum + (parseFloat(val) || 0), 0);

export const AVERAGE = (values) =>
  values.length ? SUM(values) / values.length : 0;

export const MAX = (values) => Math.max(...values.map((val) => parseFloat(val) || 0));

export const MIN = (values) => Math.min(...values.map((val) => parseFloat(val) || 0));

export const COUNT = (values) => values.filter((val) => !isNaN(parseFloat(val))).length;
