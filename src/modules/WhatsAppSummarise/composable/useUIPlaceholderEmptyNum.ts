export function useUIPlaceholderEmptyNum(num: number): number | string {
  if (num < 1 || num == null) {
    return 'N/A';
  }

  return num;
}
