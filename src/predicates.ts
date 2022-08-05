export function isNotNull<TValue>(value: TValue | null): value is TValue {
  return value !== null;
}

export function isNotUndefined<TValue>(
  value: TValue | undefined
): value is TValue {
  return value !== undefined;
}

export function isNotNullish<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return isNotNull(value) && isNotUndefined(value);
}
