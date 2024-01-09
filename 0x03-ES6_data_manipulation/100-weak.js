/* eslint-disable consistent-return */
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 1);
    return weakMap.get(endpoint);
  }

  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);
  if (weakMap.get(endpoint) >= 5) { throw new Error('Endpoint load is high'); }
}
