
export function pipe<T>(...fns) {
  return (result) => fns.reduce((acc, fn) => fn(acc), result);
}
