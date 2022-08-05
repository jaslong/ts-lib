export async function arrayMapAsync<T, U>(
  a: ReadonlyArray<T>,
  predicate: (value: T, index: number, array: ReadonlyArray<T>) => Promise<U>,
  thisArg?: unknown
): Promise<Array<U>> {
  return await Promise.all(a.map(predicate, thisArg));
}

export async function arrayFilterAsync<T>(
  a: ReadonlyArray<T>,
  predicate: (
    value: T,
    index: number,
    array: ReadonlyArray<T>
  ) => Promise<boolean>,
  thisArg?: unknown
): Promise<Array<T>> {
  const filterResults = await arrayMapAsync(a, predicate, thisArg);
  return a.filter((_, index) => filterResults[index]);
}
