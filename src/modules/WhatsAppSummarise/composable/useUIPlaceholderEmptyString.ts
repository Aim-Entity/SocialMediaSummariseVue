export function useUIPlaceholderEmptyString(text: string): string {
  if (text == '' || text == null) {
    return 'N/A';
  }

  return text;
}
